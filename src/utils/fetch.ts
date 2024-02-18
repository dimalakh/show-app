import { ref } from 'vue'

export function useFetch<T = any>(url: string) {
  const data = ref<T | null>(null)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
