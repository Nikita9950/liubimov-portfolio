// scrollToTop-start

const offset = 100
const scrollToTop = document.querySelector('.scroll-to-top')

const getTop = () => window.pageYOffset || document.documentElement.scrollTop

// onscroll
window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollToTop.classList.add('scroll-to-top__active')
  } else {
    scrollToTop.classList.remove('scroll-to-top__active')
  }
})

// click
scrollToTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
// scrollToTop-end

// menu-start
const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.menu')
const menuItem = Array.from(document.getElementsByClassName('menu__item'))

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('menu__active')
  burgerButton.classList.toggle('burger-button__active')

  for (let i = 0; i < menuItem.length; i++) {
    setTimeout(() => {
      menuItem[i].classList.toggle('menu__item-active')
    }, (i * 50));
  }
})

document.querySelector('.menu__list').addEventListener('click', () => {
  menu.classList.toggle('menu__active')
  burgerButton.classList.toggle('burger-button__active')
  for (let i = 0; i < menuItem.length; i++) {
    setTimeout(() => {
      menuItem[i].classList.toggle('menu__item-active')
    }, (i * 50));
  }
})

function scrollTo(elem) {
  if (document.documentElement.clientWidth < 992) {
    window.scroll({
      left: 0,
      top: elem.offsetTop - 45,
      behavior: 'smooth'
    })
  } else {
    window.scroll({
      left: 0,
      top: elem.offsetTop - 150,
      behavior: 'smooth'
    }
    )
  }
}

function scrollToProject(elem) {
  window.scroll({
    left: 0,
    top: elem.offsetTop - 45,
    behavior: 'smooth'
  })
}

menuItem[0].addEventListener('click', () => {
  scrollTo(document.getElementById('section-about'))
})

menuItem[1].addEventListener('click', () => {
  scrollTo(document.getElementById('section-skills'))
})

menuItem[2].addEventListener('click', () => {
  scrollTo(document.getElementById('section-education'))
})

menuItem[3].addEventListener('click', () => {
  scrollToProject(document.getElementById('section-project'))
})

// menu-end
