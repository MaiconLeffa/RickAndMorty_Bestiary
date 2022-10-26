export const saveNavigation = (page, filters) => {
  sessionStorage.setItem('_currentPage', page)
  sessionStorage.setItem('_filters', JSON.stringify(filters))
}