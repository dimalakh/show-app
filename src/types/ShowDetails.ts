import type { Show } from './Show'

export interface ShowDetails extends Show {
  rating: {
    average: number
  } | null
}
