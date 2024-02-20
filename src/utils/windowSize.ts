import { ref, onMounted, onUnmounted } from 'vue'

export const useWindowSize = () => {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)

  const handleResize = debounce(() => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  }, 300)

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { windowWidth, windowHeight }
}

const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
