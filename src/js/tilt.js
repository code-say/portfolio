import VanillaTilt from 'vanilla-tilt'

// Same subtle tilt on project images as before, without jQuery.
const initTilt = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  VanillaTilt.init(document.querySelectorAll('.project-wrapper__image a div'), {
    max: 3,
    speed: 400,
    glare: false,
  })
}

export default initTilt
