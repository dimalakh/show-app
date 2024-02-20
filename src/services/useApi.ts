import { ref, onMounted, watchEffect, type UnwrapRef, type Ref, toValue } from 'vue'
import { TvmazeApi } from './Api'
import type { Season, ShowResponse } from '@/types'
import type { ShowDetails } from '@/types/ShowDetails'

const api = new TvmazeApi()

type FetchFnParams = { id?: string | undefined; searchQuery?: string | undefined }
type HookArgs = { id?: string | undefined; searchQuery?: Ref<string | undefined> }
const createApiHook =
  <T>(fetchFn: (p: FetchFnParams) => Promise<T>) =>
  (args: HookArgs) => {
    const data = ref<T | null>(null)
    const error = ref<any>(null)
    const isLoading = ref<boolean>(false)

    const fetchData = () => {
      data.value = null
      error.value = null

      fetchFn({
        id: args.id,
        searchQuery: toValue(args.searchQuery)
      })
        .then((json) => {
          data.value = json as UnwrapRef<T>
        })
        .catch((err) => {
          error.value = err
        })
    }

    const fetchOnMount = () => {
      fetchData()
    }

    onMounted(fetchOnMount)

    watchEffect(() => {
      fetchData()
    })

    return { data, error, isLoading, refetch: fetchData }
  }

export const useFetchShows = createApiHook<ShowResponse[]>(api.getShows)
export const useFetchShowSeasons = createApiHook<Season[]>(api.getSeasons)
export const useFetchShowDetails = createApiHook<ShowDetails>(api.getShowDetails)
