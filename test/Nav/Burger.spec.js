import { mount } from '@vue/test-utils'
import Burger from '@/components/Nav/Burger.vue'

describe('Burger', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Burger)
    expect(wrapper.vm).toBeTruthy()
    expect(Burger.methods.burgerMenuToggle)
  })
})
