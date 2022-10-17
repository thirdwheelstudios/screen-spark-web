<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useSocketsStore } from '../store'
import InfoPanel from '../components/InfoPanel.vue'

const socketsStore = useSocketsStore()

const isConnected = computed(() => socketsStore.isConnected)
const connectionId = computed(() => socketsStore.id)

onMounted(() => {
  socketsStore.connect()
})
</script>

<template>
  <div v-if="isConnected">Connected</div>
  <InfoPanel v-else message="Establishing connection, please wait..." />
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
