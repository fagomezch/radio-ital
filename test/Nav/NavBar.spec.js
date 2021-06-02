import { mount } from '@vue/test-utils'
import NavBar from '@/components/Nav/NavBar.vue'

describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar, {
      mocks: {
        $i18n: {
          locale: 'en',
          locales: ['en', 'es', 'pt']
        },
        $t: i => i,
        localePath: i => i,
        switchLocalePath: i => i
      },
      stubs: {
        NuxtLink: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(NavBar.methods.burgerMenuRemove)
  })
})
