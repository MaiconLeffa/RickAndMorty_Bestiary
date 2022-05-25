import Image from 'next/image'
import schema from './schema'

export default ({ specie }) =>
  <Image src={schema[specie] || '/unknown.svg'} layout='fixed' alt='Rick and Morty' height={20} width={20} />
