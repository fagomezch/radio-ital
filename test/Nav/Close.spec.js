import { mount } from '@vue/test-utils'
import Close from '@/components/Nav/Close.vue'

describe('Close', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Close)
    expect(wrapper.vm).toBeTruthy()
    expect(Close.methods.burgerMenuRemove)
  })
})
