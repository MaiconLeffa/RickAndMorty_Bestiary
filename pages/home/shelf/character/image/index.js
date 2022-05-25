import Image from 'next/image'
import styles from './image.module.css'

export default ({ source }) =>
  <div className={styles.image}>
    <Image layout='fill' objectFit='cover' alt='Rick and Morty' src={source} />
  </div>