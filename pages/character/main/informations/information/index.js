import Image from 'next/image'
import styles from './information.module.css'
import iconSource from './iconSource'

export default ({ info, label, icon }) =>
  <div className={styles.information__container}>
    <Image src={iconSource(icon)} layout='fixed' alt='Rick and Morty' width={25} height={25} />
    <div>
      <span>{label}</span>
      <p>{info}</p>
    </div>
  </div>