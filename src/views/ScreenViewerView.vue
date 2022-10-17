<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useSocketsStore } from '../store'
import CenteredInfoPanel from '../components/CenteredInfoCard.vue'
import { getInterval } from '../composables'

const socketsStore = useSocketsStore()
const { intervalTrigger } = getInterval(10000)

const message = ref('Connecting to Spark, please wait...')

const isConnected = computed(() => socketsStore.isConnected)
const connectionId = computed(() => socketsStore.id)

onMounted(() => {
  socketsStore.connect()
})

watch(
  () => intervalTrigger.value,
  (value) => {
    if (value) {
      message.value =
        'We are currently experiencing problems connecting to Spark. Please bear with us while we keep trying...'
    }
  }
)
</script>

<template>
  <div v-if="isConnected">Connected</div>
  <CenteredInfoPanel v-else :message="message" icon="circle-notch" :spin="true"
    ><p>{{ message }}</p></CenteredInfoPanel
  >
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
