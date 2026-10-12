import './style/main.scss'
import initSr from './js/sr'
import initTilt from './js/tilt'

// Smooth scrolling for in-page links (replaces the old jQuery animate)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href')
    const target = id.length > 1 && document.querySelector(id)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth' })
  })
})

document.getElementById('year').textContent = new Date().getFullYear()

initSr()
initTilt()
