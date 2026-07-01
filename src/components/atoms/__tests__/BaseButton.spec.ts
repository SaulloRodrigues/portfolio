import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Clique Aqui',
      },
    })
    expect(wrapper.text()).toBe('Clique Aqui')
  })

  it('applies primary variant classes by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('bg-indigo-600')
  })

  it('applies secondary variant classes when variant prop is secondary', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('bg-gray-100')
  })
})
