<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { getInterval, useScreenStreaming } from '../composables'
import IconInfoCard from '../components/IconInfoCard.vue'
import QrCode from '../components/QrCode.vue'

const { socketsStore, webRTCStore } = useScreenStreaming(false)
const { intervalTrigger } = getInterval(10000)

const { id, isConnected } = storeToRefs(socketsStore)

const isSlowToConnect = computed(
  () => !isConnected.value && intervalTrigger.value
)
const shareUrl = computed(() => {
  if (id.value?.length)
    return `${import.meta.env.VITE_APP_ROOT_URL}/broadcast/${id.value}`
})

const message = computed(() => {
  if (isConnected.value) return

  if (isSlowToConnect.value)
    return 'We are currently experiencing problems connecting to Spark. Please bear with us while we keep trying...'

  return 'Connecting to Spark, please wait...'
})

onMounted(() => {
  socketsStore.connect()
})

watch(
  () => shareUrl.value,
  (value) => {
    if (!value) return

    webRTCStore.startListening()
  }
)
</script>

<template>
  <Transition>
    <div v-if="shareUrl"><QrCode :data-to-encode="shareUrl" /></div>
    <div v-else class="status-container">
      <IconInfoCard
        header="Connecting to Spark"
        :message="message"
        icon="circle-notch"
        :spin="true"
        :shadow="true"
        class="status-card"
      >
        <div v-if="isSlowToConnect">
          <p class="m-3">
            We are currently experiencing problems connecting to Spark
          </p>
          <p>Please bear with us whilst we keep trying...</p>
        </div>
        <p class="m-3" v-else>Connecting to Spark, please wait...</p>
      </IconInfoCard>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.status-container {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .status-card {
    height: 210px;
    width: 550px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transition-delay: 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
