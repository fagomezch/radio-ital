import { mount } from '@vue/test-utils'
import Logo from '@/components/Header/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', async () => {
    const wrapper = mount(Logo, {
      mocks: {
        $t: i => i,
        localePath: i => i
      },
      stubs: {
        NuxtLink: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
    await wrapper.find('img').trigger('click')
  })
})
