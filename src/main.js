window.onload = function () {
  Particles.init({
    selector: '.background',
    color: ['#333333'],
    connectParticles: true,

    responsive: [
      {
        breakpoint: 1024,
        options: {
          maxParticles: 80,
          color: '#333333',
          connectParticles: true
        }
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 50,
          color: '#333333',
          connectParticles: true
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 30,
          connectParticles: true
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0

          // disables particles.js
        }
      }
    ]
  })
}

window.addEventListener("load", ()=> {
  alert('Este portfolio ainda está em desenvolvimento :)')
})

window.addEventListener('scroll', showNavOnScroll)

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector('#nav').classList.add('bg-[#111111]')
  } else {
    document.querySelector('#nav').classList.remove('bg-[#111111]')
  }
}

function openMenu(){
  document.querySelector('#menu').classList.remove('hidden')
}
function closeMenu(){
  document.querySelector('#menu').classList.add('hidden')
}