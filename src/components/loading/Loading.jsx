import loading from './../../assets/loading.svg'
import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
        <img src={loading} alt="Loading" />
    </div>
  )
}
