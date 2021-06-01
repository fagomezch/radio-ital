import { mount } from '@vue/test-utils'
import Slider from '@/components/Home/Slider.vue'

describe('Slider', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Slider, {
      data () {
        return {
          sliderImages: [
            {
              img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide1.jpg'
            },
            {
              img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide2.jpg'
            },
            {
              img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide3.jpg'
            }
          ],
          slideIndex: 1
        }
      },
      mocks: {
        $store: {
          state: {
            homeSlider: [
              {
                img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide1.jpg'
              },
              {
                img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide2.jpg'
              },
              {
                img: 'https://raw.githubusercontent.com/fagomezch/api/main/radio-ital/images/home-slider/slide3.jpg'
              }
            ]
          }
        },
        $t: i => i
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(typeof Slider.data).toBe('function')

    wrapper.vm.plusSlides()
    wrapper.vm.showSlides()
  })
})
