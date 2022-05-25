import { useState } from 'react'
import Clear from './clear'
import Name from './name'
import MobileButton from './mobileButton'
import Species from './species'
import Status from './status'
import styles from './filter.module.css'

export default () => {
  const [sideBar, setSideBar] = useState(false)

  const toggle = () => setSideBar(!sideBar)

  return (
    <div onClick={toggle} opened={sideBar.toString()} className={styles.filter}>
      <MobileButton visible={!sideBar} onPress={toggle} />
      <div onClick={e => e.stopPropagation()} className={styles.filter__container}>
        <p className={styles.filter__title}>Filters:</p>
        <Name />
        <Status />
        <Species />
        <Clear />
      </div>
    </div>
  )
}