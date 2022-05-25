import { useContext } from 'react'
import Character from './character'
import context from '../homeContext/context'
import Filter from './filter'
import isEmpty from './isEmpty'
import NoData from './noData'
import Pagination from './pagination'
import Skeleton from './skeleton'
import styles from './shelf.module.css'

export default () => {
  const { data, isloading } = useContext(context)
  return (
    <div className={styles.shelf__container}>
      <Filter />
      <div>
        <section className={styles.shelf}>
          {isloading
            ? <Skeleton />
            : isEmpty(data)
              ? <NoData />
              : data.map(character => <Character key={character.id} infos={character} />)
          }
        </section>
        {!isEmpty(data) && <Pagination />}
      </div>
    </div>
  )
}