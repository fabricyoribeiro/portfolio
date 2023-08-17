window.onload = function () {
  Particles.init({
    selector: '.background',
    color: ['#ffffff'],
    connectParticles: true
  })
}

window.addEventListener('scroll', showNavOnScroll)

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector('#nav').classList.add('bg-[#111111]')
  } else {
    document.querySelector('#nav').classList.remove('bg-[#111111]')
  }
}
