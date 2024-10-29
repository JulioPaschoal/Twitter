import styles from './Tweet.module.css'

export default function Tweet(props) {
  return (
    <div className={styles.tweetContainer}>
      <img className={styles.avatar} src={'http://github.com/juliopaschoal.png'} />
      <div className={styles.user}>
        <span className={styles.userName}>Julio Paschoal</span>
        <span className={styles.userUserName}>@juliopaschoal</span>
        <span className={styles.date}>20 minutos atrás</span>
      </div>
      <div className={styles.tweetText}>
      {props.children}
      </div>
    </div>
  )
}