export const state = () => ({
  addOverflowHtml () {
    document.querySelector('html').classList.add('overflow-hidden')
  },

  removeOverflowHtml () {
    document.querySelector('html').classList.remove('overflow-hidden')
  },

  scrollNavStyle () {
    window.addEventListener('scroll', () => {
      const navStyleScroll = document.querySelector('.nav')
      const hideScrollDownMouse = document.querySelector('.icon-scroll')
      if (window.scrollY === 1) {
        navStyleScroll.classList.toggle('scroll')
        if (hideScrollDownMouse) {
          hideScrollDownMouse.classList.toggle('hide')
        }
      } else if (window.scrollY > 1) {
        navStyleScroll.classList.add('scroll')
        if (hideScrollDownMouse) {
          hideScrollDownMouse.classList.add('hide')
        }
      } else if (window.scrollY === 0) {
        navStyleScroll.classList.remove('scroll')
        if (hideScrollDownMouse) {
          hideScrollDownMouse.classList.remove('hide')
        }
      }
    })
  },

  toggleMenu () {
    const navBurger = document.querySelector('.nav__burger')
    const navClose = document.querySelector('.nav__close')
    const navMenu = document.querySelector('.nav__menu')

    navBurger.classList.toggle('hide')
    navClose.classList.toggle('show')
    navMenu.classList.toggle('show')
  }
})
