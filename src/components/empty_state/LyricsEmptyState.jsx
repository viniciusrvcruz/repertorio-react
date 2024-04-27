import lyricsEmptyState from './../../assets/lyrics_empty_state.png'
import styles from './EmptyState.module.css'

export const LyricsEmptyState = () => {
  return (
    <div className={styles.emptyState}>
        <img src={lyricsEmptyState} alt="Imagem de repertório" />
        <h3>Adicione a letra da música</h3>
        <p>Aqui ficará a letra da música, ela pode ser adicionada através de pesquisa automática ou manualmente.</p>
    </div>
  )
}
