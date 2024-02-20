

// export function useFetch<T>(url: string | (() => string)) {
//   const data = ref<T | null>(null)
//   const error = ref<any>(null)
//   const isLoading = ref<boolean>(false)

//   const fetchData = () => {
//     data.value = null
//     error.value = null

//     fetch(toValue(url))
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.statusText}`)
//         }
//         return res.json()
//       })
//       .then((json) => {
//         data.value = json
//       })
//       .catch((err) => {
//         error.value = err
//       })
//   }

//   const fetchOnMount = () => {
//     fetchData()
//   }

//   onMounted(fetchOnMount)

//   watchEffect(() => {
//     fetchData()
//   })

//   return { data, error, isLoading }
// }
