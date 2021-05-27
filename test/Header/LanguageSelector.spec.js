import { mount } from '@vue/test-utils'
import LanguageSelector from '@/components/Header/LanguageSelector.vue'

describe('LanguageSelector', () => {
  test('is a Vue instance', () => {
    const localThis = { even: false }
    const wrapper = mount(LanguageSelector, {
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
    expect(LanguageSelector.computed.availableLocales)
  })
})
