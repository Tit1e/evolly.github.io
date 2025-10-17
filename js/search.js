let SEARCH_LIST = ''
function getSearchList() {
  fetch('/search.json')
  .then(response => response.json())
    .then(data => {
      SEARCH_LIST = JSON.stringify(data)
  })
}

getSearchList()


function search(str) {
  const _str = str.toLowerCase()
  const list = JSON.parse(SEARCH_LIST)
  const result = list.filter(i => {
    const tags = (i.tags || []).join('').toLowerCase()
    const title = i.title.toLowerCase()
    return tags.includes(_str) || title.includes(_str)
  })
  return result
}

const searchDom = document.querySelector('#search')
searchDom.addEventListener('input', (e) => {
  e.target.value && search(e.target.value)
});