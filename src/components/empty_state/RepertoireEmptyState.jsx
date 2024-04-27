import repertoireEmptyState from './../../assets/repertoire_empty_state.png'
import styles from './EmptyState.module.css'

export const RepertoireEmptyState = () => {
  return (
    <div className={styles.emptyState}>
        <img src={repertoireEmptyState} alt="Imagem de repertório" />
        <h3>Adicione repertórios</h3>
        <p>Organize suas músicas através de repertórios</p>
    </div>
  )
}
