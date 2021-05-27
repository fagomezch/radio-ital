import { mount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
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
  })
})
