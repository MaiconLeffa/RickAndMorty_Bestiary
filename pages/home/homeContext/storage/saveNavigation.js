export default (page, filters) => {
  localStorage.setItem('_currentPage', page)
  localStorage.setItem('_filters', JSON.stringify(filters))
}