import React, { useContext, useEffect, useState } from 'react'
import styles from './RepertoireMusics.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ModalSaveMusic } from '../../components/modal/ModalSaveMusic/ModalSaveMusic'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { Header } from '../../components/header/Header'
import { ModalSaveRepertoire } from '../../components/modal/ModalSaveRepertoire/ModalSaveRepertoire'
import { ErrorMessage } from '../../components/alerts/ErrorMessage'
import musicImage from './../../assets/music_image.jpg'
import { RepertoireMusicEmptyState } from '../../components/empty_state/RepertoireMusicEmptyState'


export const RepertoireMusics = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { repertoireId } = useParams()
    const [musics, setMusics] = useState([])
    const [repertoire, setRepertoire] = useState('')
    const [showOption, setShowOption] = useState(false)
    const [modalRepertoireOpen, setModalRepertoireOpen] = useState(false)
    const [modalMusicOpen, setModalMusicOpen] = useState(false)
    const [musicsFilter, setMusicsFilter] = useState('')


    useEffect(() => {
        getMusics()
        getRepertoire()
    }, [])

    const getMusics = async () => {
        onSnapshot(collection(db, "users", user.uid, "repertoires", repertoireId, "musics"), (data) => {
            if(data) {
                setMusics(data.docs.map((music) => ({ ...music.data(), id: music.id })))
            } else {
                setMusics([])
            }
        });
    }

    const getRepertoire = () => {
        onSnapshot(doc(db, "users", user.uid, "repertoires", repertoireId), (data) => {
            setRepertoire({...data.data(), id: repertoireId})
        })
    }

    const deleteRepertoire = () => {
        navigate('/')

        deleteDoc(doc(db, "users", user.uid, "repertoires", repertoireId))
        .catch(() => {
            ErrorMessage('Erro ao deletar repertório')
        })
    }

    return (
        <>
            {repertoire && <div className={styles.repertoireMusics} onClick={() => { if(showOption) setShowOption(false)}}>
                <Header>
                    <i className="fa-solid fa-arrow-left" onClick={() => navigate('/')}></i>
                    <h3>Repertório</h3>
                    <span onClick={() => setShowOption(!showOption)}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                    {showOption && <ul>
                        <li onClick={() => setModalRepertoireOpen(!modalRepertoireOpen)}>Editar</li>
                        <li onClick={() => deleteRepertoire()}>Excluir</li>
                    </ul>}
                </Header>
                <main>
                    <div className={styles.mainHeader}>
                        <section>
                            <h1>{repertoire.name}</h1>
                            <span>{musics.length === 1 ? `${musics.length} música` : `${musics.length} músicas`}</span>
                            <p className={styles.description}>{repertoire.description}</p>
                        </section>
                        <div>
                            <input placeholder='Pesquiar músicas' onChange={(e) => setMusicsFilter(e.target.value.toLowerCase())} />
                        </div>
                    </div>
                    <div className={styles.mainBody}>
                        {musics.length > 0 ? musics
                            .filter(music =>  music.name.toLowerCase().includes(musicsFilter))
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((music, index) => (
                                <Link to={`/repertoire/${repertoireId}/${music.id}`} key={index}>
                                    <section>
                                        <img src={music.image ? music.image : musicImage} alt="Imagem da música" />
                                    </section>
                                    <div>
                                        <h5>{music.name}</h5>
                                        <p>Artista/banda: {music.artist}</p>
                                        <span>Tom: {music.tone}</span>
                                    </div>
                                </Link>
                            )) : <RepertoireMusicEmptyState />}
                    </div>
                </main>
                <button className={styles.BtnAddMusic} onClick={() => setModalMusicOpen(!modalMusicOpen)}><i className="fa-solid fa-plus"></i></button>

                {modalMusicOpen && <ModalSaveMusic open={modalMusicOpen} setOpen={setModalMusicOpen} user={user} repertoireId={repertoireId} />}

                <ModalSaveRepertoire open={modalRepertoireOpen} setOpen={setModalRepertoireOpen} user={user} repertoire={repertoire} />
            </div>}
        </>
    )
}
