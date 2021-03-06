export const state = () => ({
  homeSlider: [
    {
      img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide1.jpg',
      imgXs: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide1-xs.jpg',
      alt: 'sliderOneAlt'
    },
    {
      img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide2.jpg',
      imgXs: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide2-xs.jpg',
      alt: 'sliderTwoAlt'
    },
    {
      img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide3.jpg',
      imgXs: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide3-xs.jpg',
      alt: 'sliderThreeAlt'
    },
    {
      img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide4.jpg',
      imgXs: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide4-xs.jpg',
      alt: 'sliderFourAlt'
    }
  ],
  uvp: {
    first: 'uvp.first',
    second: 'uvp.second',
    third: 'uvp.third'
  }
})

export const actions = {
  burgerMenuRemove () {
    const navBar = document.querySelector('.navbar')
    const navBurger = document.querySelector('.nav__burger')
    const navClose = document.querySelector('.nav__close')
    navBar.classList.remove('show')
    navBurger.classList.remove('hide')
    navClose.classList.remove('show')
    document.querySelector('html').classList.remove('overflow-hidden')
  },
  burgerMenuToggle () {
    const navBar = document.querySelector('.navbar')
    const navBurger = document.querySelector('.nav__burger')
    const navClose = document.querySelector('.nav__close')
    navBar.classList.toggle('show')
    navBurger.classList.toggle('hide')
    navClose.classList.toggle('show')
    document.querySelector('html').classList.add('overflow-hidden')
  }
}
