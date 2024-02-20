import type { Season, ShowResponse } from '@/types'
import type { ShowDetails } from '@/types/ShowDetails'

export class TvmazeApi {
  private apiUrl: string

  constructor() {
    this.apiUrl = 'https://api.tvmaze.com'
    this.getData = this.getData.bind(this)
    this.getShows = this.getShows.bind(this)
    this.getShowDetails = this.getShowDetails.bind(this)
    this.getSeasons = this.getSeasons.bind(this)
  }

  private async getData<T = unknown>(path: string): Promise<T> {
    const res = await fetch(`${this.apiUrl}${path}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`)
    }
    return res.json()
  }

  public async getShows({
    searchQuery
  }: {
    searchQuery?: string | undefined
  }): Promise<ShowResponse[]> {
    return await this.getData(`/search/shows?q=${searchQuery}`)
  }

  public async getShowDetails({ id }: { id?: string | undefined }): Promise<ShowDetails> {
    return await this.getData(`/shows/${id}`)
  }

  public async getSeasons({ id }: { id?: string | undefined }): Promise<Season[]> {
    return await this.getData(`/shows/${id}/seasons`)
  }
}
