const body = document.getElementById('body')
const nav = document.getElementById('nav')
const footer = document.getElementById('footer')
const kembo = document.getElementById('kembo')

var checkbox = document.getElementById('toggle-me');
var close = document.getElementById('toggle-off')

checkbox.addEventListener('click',() => {
  body.classList.add('bg-dark')
  nav.classList.remove('bg-white')
  nav.classList.add('bg-dark');
  footer.classList.remove('bg-white')
  footer.classList.add('bg-dark')
  kembo.classList.add('text-light')

  close.classList.remove('invisible')
  close.classList.add('visible')
  checkbox.classList.add('invisible')

});

close.addEventListener('click', () => {
  body.classList.remove('bg-dark')
  nav.classList.remove('bg-dark')
  footer.classList.remove('bg-dark')

  checkbox.classList.remove('invisible')
  checkbox.classList.add('visible')
  close.classList.remove('visible')
  close.classList.add('invisible')
})