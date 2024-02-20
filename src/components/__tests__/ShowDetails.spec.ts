import { mount } from '@vue/test-utils'
import ShowDetails from '@/components/ShowDetails.vue'
import { describe, expect, it } from 'vitest'

describe('ShowDetails.vue', () => {
  it('renders show details correctly', () => {
    const show = {
      name: 'Test Show',
      language: 'English',
      genres: ['Action', 'Comedy'],
      rating: { average: 8 },
      image: { medium: 'test-image-url', original: 'test-image-original-url' },
      summary: 'Test summary'
    }

    const wrapper = mount(ShowDetails, {
      props: { show }
    })

    expect(wrapper.find('h1').text()).toBe('Test Show')
    expect(wrapper.find('img').attributes('src')).toBe(show.image.original)
    expect(wrapper.find('img').attributes('alt')).toBe(show.name)
    expect(wrapper.findAll('p')[0].text()).toContain(`Rating: ${show.rating.average}/10`)
    expect(wrapper.findAll('p')[1].text()).toContain(`Language: ${show.language}`)
    expect(wrapper.findAll('p')[2].text()).toContain(`Genres: ${show.genres.join(', ')}`)
    expect(wrapper.findAll('p')[3].html()).toContain(show.summary)
  })

  it('renders placeholder when image is not provided', () => {
    const show = {
      name: 'Test Show',
      language: 'English',
      genres: ['Action', 'Comedy'],
      rating: { average: 8 },
      image: null,
      summary: 'Test summary'
    }

    const wrapper = mount(ShowDetails, {
      props: { show }
    })

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toContain('No image')
  })
})
