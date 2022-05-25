import { useContext } from 'react'
import context from '../../../homeContext/context'
import styles from './name.module.css'

export default () => {
  const { filters, changeFilter } = useContext(context)

  return (
    <div className={styles.name}>
      <label>Find by name:</label>
      <input value={filters.name } onChange={e => changeFilter('name', e.target.value)} />
    </div>
  )
}