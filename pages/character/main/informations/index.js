import { useContext } from 'react'
import context from '../../context'
import date from './date'
import Information from './information'
import Specie from './specie'
import styles from './informations.module.css'

export default () => {
  const { character } = useContext(context)

  return (
    <div className={styles.informations}>
      <h1>{character.name}</h1>
      <Information label='Status:' icon={character.status} info={character.status} />
      <Specie specie={character.species} />
      <Information label='Gender:' icon={character.gender} info={character.gender} />
      <hr></hr>
      <Information label='Origin:' icon='planet' info={character.origin.name} />
      <Information label='Origin dimension:' icon='dimension' info={character.origin.dimension} />
      <hr></hr>
      <Information label='Last known location:' icon='location' info={character.location.name} />
      <Information label='Last known location dimension:' icon='dimension' info={character.location.dimension} />
      <Information label='Created at:' icon='calendar' info={date(character.created)} />
    </div>
  )
}