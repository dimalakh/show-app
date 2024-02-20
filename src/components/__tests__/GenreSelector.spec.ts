import { mount } from '@vue/test-utils'
import GenreSelector from '@/components/GenreSelector.vue'
import MobileGenreSelector from '@/components/MobileGenreSelector.vue'
import { describe, expect, it, vitest } from 'vitest'

describe('GenreSelector.vue', () => {
  it('renders genres and selects genre correctly', async () => {
    const genres = ['Action', 'Comedy', 'Drama']
    const selectedGenre = 'Action'
    const onSelectGenre = vitest.fn()

    const wrapper = mount(GenreSelector, {
      props: { genres, selectedGenre, onSelectGenre }
    })

    const genreItems = wrapper.findAll('li')
    expect(genreItems.length).toBe(genres.length)
    genres.forEach((genre, index) => {
      expect(genreItems[index].text()).toBe(genre)
    })

    expect(wrapper.find('li.text-white.bg-blue-600').text()).toBe(selectedGenre)

    await genreItems[1].trigger('click')
    expect(onSelectGenre).toHaveBeenCalledWith(genres[1])
  })

  it('renders correctly on mobile', async () => {
    window.innerWidth = 200
    window.dispatchEvent(new Event('resize'))
    const genres = ['Action', 'Comedy', 'Drama']
    const selectedGenre = 'Comedy'
    const onSelectGenre = vitest.fn()

    const wrapper = mount(GenreSelector, {
      props: { genres, selectedGenre, onSelectGenre }
    })

    expect(wrapper.findComponent(MobileGenreSelector).html()).include('select')
  })
})
