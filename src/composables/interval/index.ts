import { onMounted, onUnmounted, ref } from 'vue'

const getInterval = (timeoutInMs: number) => {
  const interval = ref<number>()
  const intervalTrigger = ref(false)

  onMounted(() => {
    interval.value = setInterval(() => {
      intervalTrigger.value = true
      clearInterval(interval.value)
    }, timeoutInMs)
  })

  onUnmounted(() => {
    if (interval.value) {
      clearInterval(interval.value)
    }
  })

  return {
    intervalTrigger,
  }
}

export { getInterval }
