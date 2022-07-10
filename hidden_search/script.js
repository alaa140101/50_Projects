const search = document.querySelector('.search')
const btnEl = document.querySelector('.btn')
const inputEl = document.querySelector('.input')

btnEl.addEventListener('click', () => {
  search.classList.toggle('active')
  inputEl.focus()
})

inputEl.addEventListener('focusout', () => {
  search.classList.remove('active')
})



