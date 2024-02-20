import { mount } from '@vue/test-utils'
import ShowImage from '@/components/ShowImage.vue'
import { describe, expect, it } from 'vitest'

describe('ShowImage.vue', () => {
  it('renders image when imageUrls is provided', () => {
    const imageUrls = 'test-image-url'
    const alt = 'Test Alt Text'

    const wrapper = mount(ShowImage, {
      props: { imageUrls, alt }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(imageUrls)
    expect(img.attributes('alt')).toBe(alt)
  })

  it('renders placeholder when imageUrls is not provided', () => {
    const alt = 'Test Alt Text'

    const wrapper = mount(ShowImage, {
      props: { imageUrls: undefined, alt }
    })

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toBe('No image')
  })
})
