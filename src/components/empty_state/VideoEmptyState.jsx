import videoEmptyState from './../../assets/video_empty_state.jpg'
import styles from './EmptyState.module.css'

export const VideoEmptyState = () => {
  return (
    <div className={styles.emptyState}>
        <img src={videoEmptyState} alt="Imagem de repertório" />
        <h3>Adicione um vídeo da música</h3>
        <p>Aqui ficará o vídeo da música</p>
    </div>
  )
}
