import Species from '../../../../../elements/species'
import styles from './specie.module.css'

export default ({ specie }) =>
  <div className={styles.specie__container}>
    <Species specie={specie} />
    <div>
      <span>Specie:</span>
      <p>{specie}</p>
    </div>
  </div>