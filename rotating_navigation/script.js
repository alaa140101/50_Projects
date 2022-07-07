const container = document.querySelector('.container')
const openNav = document.getElementById('open')
const closeNav = document.getElementById('close')

openNav.addEventListener('click', () => {
  container.classList.add('show-nav')
  closeNav.attributes('top', '0')
})

closeNav.addEventListener('click', () => {
  container.classList.remove('show-nav')
})