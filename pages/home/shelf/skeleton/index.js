import styles from './skeleton.module.css'

export default () =>
  Array.apply(null, { length: 12 }).map((_, i) =>
    <div key={i} className={styles.skeleton}></div>
  )

