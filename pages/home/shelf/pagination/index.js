import { useContext } from 'react'
import context from '../../homeContext/context'
import styles from './pagination.module.css'

export default () => {
  const { isloading, page, hasNextPage, hasPrevPage, nextPage, prevPage } = useContext(context)

  return (
    <div disabled={isloading} className={styles.pagination}>
      <button disabled={!hasPrevPage} onClick={() => prevPage()}>{'<'}</button>
      <p>{page}</p>
      <button disabled={!hasNextPage} onClick={() => nextPage()}>{'>'}</button>
    </div>
  )
} 