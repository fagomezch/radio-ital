import { mount } from '@vue/test-utils'
import Burger from '@/components/Icons/Burger.vue'

describe('Burger', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Burger)
    expect(wrapper.vm).toBeTruthy()
  })
})
