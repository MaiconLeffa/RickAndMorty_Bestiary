import { useContext } from 'react'
import context from '../../../homeContext/context'
import Radiobutton from '../../../../../elements/radiobutton'
import schema from './schema.json'

export default () => {
  const { filters, changeFilter } = useContext(context)

  return (
    <div>
      <p>Status:</p>
      {schema.map(status =>
        <Radiobutton key={status} checked={status === filters.status} onChange={() => changeFilter('status', status)} label={status} />)
      }
    </div>
  )
}