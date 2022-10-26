import { endpoint } from './endpoint'

export const Storage = async (id) => {
  const headers = { 'content-type': 'application/json' }
  const graphqlQuery = {
    'query': `query {character(id: ${id}) {id,name,status,species,type,gender,image,created, origin {id,name,type,dimension,created} location {id,name,type,dimension,created} episode {id,name,air_date,episode,created}}}`
  }
  const options = {
    'method': 'POST',
    'headers': headers,
    'body': JSON.stringify(graphqlQuery)
  }
  return fetch(endpoint, options)
    .then(res => res.json())
    .then(json => json.data.character)
    .catch(error => console.log(error))
}

