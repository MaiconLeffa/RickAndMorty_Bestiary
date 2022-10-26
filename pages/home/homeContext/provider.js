import { useState, useEffect } from 'react'
import Context from './context'
import { storage } from './storage'

const filtersDefault = { name: '', status: '', species: '' }

export default ({ children }) => {
  const [data, setdata] = useState([])
  const [done, setdone] = useState(false)
  const [filters, setfilters] = useState(filtersDefault)
  const [isloading, setisloading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasPrevPage, setHasPrevPage] = useState(false)
  const [page, setpage] = useState(1)

  function changeFilter(filter, value) {
    setpage(1)
    const temp = { ...filters }
    temp[filter] = value
    setfilters(temp)
  }

  function nextPage() {
    setpage(page + 1)
  }

  function prevPage() {
    setpage(page - 1)
  }

  function clearFilters() {
    setpage(1)
    setfilters(filtersDefault)
  }

  function checkPages(pagination) { //verifica se o prev ou next é null
    setHasNextPage(pagination.next)
    setHasPrevPage(pagination.prev)
  }

  useEffect(() => { //Verifica se o usuario já tem setado uma pagina e filtros
    const _page = sessionStorage.getItem('_currentPage')
    const _filters = sessionStorage.getItem('_filters')
    setpage(_page ? parseInt(_page) : 1)
    _filters && setfilters(JSON.parse(_filters))
    setdone(true)
  }, [])

  useEffect(() => {
    setisloading(true)
    done &&
      storage(page, filters)
        .then(characters => {
          characters && checkPages(characters.info)
          setdata(characters ? characters.results : [])
        })
        .finally(() => setisloading(false))
  }, [page, filters, done])

  return (
    <Context.Provider
      value={{
        clearFilters,
        changeFilter,
        data,
        filters,
        hasNextPage,
        hasPrevPage,
        isloading,
        nextPage,
        page,
        prevPage
      }}>{children}</Context.Provider>
  )
}