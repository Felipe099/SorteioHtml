/* abre e fecha o menu quando clicar no icone: hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.screenY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #winners .title, #winners .image,
  #about .title, #about .bank,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
const accordion = document.getElementsByClassName('contentBx')
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/* Relogio */

/* mudar cor */

var addBg = function (e) {
  e = e || window.event
  e.preventDefault()
  var el = e.target || e.srcElement
  el.className = 'bg'
  setTimeout(function () {
    removeBg(el)
  }, 10 * 1000) //<-- (in miliseconds)
}

var removeBg = function (el) {
  el.className = 'cotas-item'
}

// var min = 0,
//   seg = 3

// function start() {
//   if (min == 0 && seg == 3) {
//     relogio()
//   }
// }

// function relogio() {
//   if (min > 0 || seg > 0) {
//     if (seg == 0) {
//       seg = 59
//       min = min - 1
//     } else {
//       seg = seg - 1
//     }
//     if (min.toString().length == 1) {
//       min = '0' + min
//     }
//     if (seg.toString().length == 1) {
//       seg = '0' + seg
//     }
//     document.getElementById('spanRelogio').innerHTML = min + ':' + seg
//     setTimeout('relogio()', 1000)
//     setCookie('tempo', min + ':' + seg, 30)
//   } else {
//     document.getElementById('spanRelogio').innerHTML = '00:00'
//     min = 1
//     seg = 1
//   }
// }

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()

  backToTop()
  activateMenuAtCurrentSection()
})
