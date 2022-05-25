import { useContext } from 'react'
import Informations from './informations'
import Image from './image'
import styles from './main.module.css'
import context from '../context'

export default () => {
  const { character } = useContext(context)

  return (
    <section className={styles.main}>
      <Image source={character.image} alt='Rick and Morty' />
      <Informations />
    </section>
  )
}