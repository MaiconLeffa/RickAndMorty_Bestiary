import { useContext } from 'react'
import context from '../../../homeContext/context'
import Radiobutton from '../../../../../elements/radiobutton'
import schema from './schema.json'

export default () => {
  const { filters, changeFilter } = useContext(context)

  return (
    <div>
      <p>Species:</p>
      {schema.map(specie =>
        <Radiobutton key={specie} checked={specie === filters.species} onChange={() => changeFilter('species', specie)} label={specie} />
      )}
    </div>
  )
}