import logo from './logo.svg'
import Image from 'next/image'
import styles from './header.module.css'

export default () =>
  <section className={styles.header}>
    <Image width={280} height={80} src={logo} alt='Rick and Morty' />
  </section>
