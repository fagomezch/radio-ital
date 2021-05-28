import { mount } from '@vue/test-utils'
import Uvp from '@/components/Home/Uvp.vue'

describe('Uvp', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Uvp, {
      data () {
        return {
          uvpFirst: 'Think Ital',
          uvpSecond: 'Live Ital',
          uvpThird: 'Listen Ital'
        }
      },
      mocks: {
        $store: {
          state: {
            uvp: {
              first: 'Think Ital',
              second: 'Live Ital',
              third: 'Listen Ital'
            }
          }
        },
        $t: i => i
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
