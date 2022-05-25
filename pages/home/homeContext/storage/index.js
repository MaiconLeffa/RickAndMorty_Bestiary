import endpoint from './endpoint'
import saveNavigation from './saveNavigation';

export default async (page, filters) => {
  saveNavigation(page, filters)
  const filtersStr = JSON.stringify(filters).replace(/"([^"]+)":/g, '$1:');
  const headers = { 'content-type': 'application/json' }
  const graphqlQuery = {
    'query': `query {characters(page: ${page}, filter:  ${filtersStr}) {info {count, next, prev} results {id,name,species,image}}}`
  }
  const options = {
    'method': 'POST',
    'headers': headers,
    'body': JSON.stringify(graphqlQuery)
  }
  return fetch(endpoint, options)
    .then(res => res.json())
    .then(json => json.data.characters)
    .catch(error => console.log(error))
}
