import Image from 'next/image'
import styles from './image.module.css'

export default ({ source }) =>
  <div className={styles.image}>
    <Image src={source} layout='fill' alt='Rick and Morty' objectFit='cover' />
  </div>
