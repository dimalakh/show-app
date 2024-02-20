import { mount } from '@vue/test-utils'
import CatalogItem from '@/components/CatalogItem.vue'
import ShowImage from '@/components/ShowImage.vue'
import { describe, expect, it } from 'vitest'

describe('CatalogItem.vue', () => {
  it('renders show name and language', () => {
    const show = {
      id: '123',
      name: 'Test Show',
      language: 'English',
      image: { medium: 'test-image-url' }
    }

    const wrapper = mount(CatalogItem, {
      props: { show }
    })

    expect(wrapper.find('h4').text()).toBe(show.name)
    expect(wrapper.find('p').text()).toBe(`Language: ${show.language}`)
    expect(wrapper.find('router-link').attributes('to')).toBe(`/show/${show.id}`)
    expect(wrapper.findComponent(ShowImage).props('imageUrls')).toBe(show.image.medium)
    expect(wrapper.findComponent(ShowImage).props('alt')).toBe(show.name)
  })
})
