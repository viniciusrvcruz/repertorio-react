import repertoireMusicEmptyState from './../../assets/repertoire_music_empty_state.jpg'
import styles from './EmptyState.module.css'

export const RepertoireMusicEmptyState = () => {
  return (
    <div className={styles.emptyState}>
        <img src={repertoireMusicEmptyState} alt="Imagem de repertório" />
        <h3>Adicione músicas</h3>
        <p>Aqui ficaram as suas músicas, elas podem ser adicionadas através de pesquisa automática ou manualmente.</p>
    </div>
  )
}
