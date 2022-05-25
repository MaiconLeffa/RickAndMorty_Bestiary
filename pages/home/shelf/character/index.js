import Image from './image'
import Link from 'next/link'
import Species from '../../../../elements/species'
import styles from './character.module.css'

export default ({ infos }) =>
  <Link href={`/character?id=${infos.id}`}>
    <a href={`/character?id=${infos.id}`} title={infos?.name} className={styles.character}>
      <Image source={infos.image} alt='Rick and Morty' />
      <div className={styles.character__infos}>
        <p className={styles.character__name}>{infos?.name}</p>
        <div className={styles.character__species}>
          <Species specie={infos.species} />
          <p>{infos?.species}</p>
        </div>
      </div>
    </a>
  </Link>