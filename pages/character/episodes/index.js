import { useContext } from 'react'
import context from '../context'
import styles from './episodes.module.css'

export default () => {
  const { character } = useContext(context)

  return (
    <section className={styles.episodes}>
      <h2>Episodes where you can find this character:</h2>
      {character?.episode.map(episode =>
        <div key={episode.id} className={styles.episodes__row}>
          <p>{episode.episode + ' - ' + episode.name}</p>
          <p className={styles.episodes__date}>{episode.air_date}</p>
        </div>
      )}
    </section>
  )
}