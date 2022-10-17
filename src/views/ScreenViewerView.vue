<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useSocketsStore } from '../store'
import { getInterval } from '../composables'
import IconInfoCard from '../components/IconInfoCard.vue'

const socketsStore = useSocketsStore()
const { intervalTrigger } = getInterval(10000)

const message = ref('Connecting to Spark, please wait...')

const isConnected = computed(() => socketsStore.isConnected)
const isSlowToConnect = computed(
  () => !isConnected.value && intervalTrigger.value
)
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
  <Transition>
    <div v-if="isConnected">connected: {{ connectionId }}</div>
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
