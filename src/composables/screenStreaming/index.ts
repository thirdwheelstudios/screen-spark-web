import { storeToRefs } from 'pinia'
import { computed, onMounted, watch } from 'vue'
import { useSocketsStore, useWebRTCStore } from '../../store'

const useScreenStreaming = (receiverId?: string) => {
  const webRTCStore = useWebRTCStore()
  const socketsStore = useSocketsStore()

  const { sdp, candidate, isConnected } = storeToRefs(socketsStore)
  const { track } = storeToRefs(webRTCStore)

  const mediaStream = computed(() => {
    if (!track.value) return

    const ms = new MediaStream()

    ms.addTrack(track.value)

    return ms
  })

  onMounted(() => {
    socketsStore.connect()
  })

  watch(
    () => sdp.value,
    async (value) => {
      if (!value) return

      await webRTCStore.setRemoteDescription(value)
    }
  )

  watch(
    () => candidate.value,
    async (value) => {
      if (!value) return

      await webRTCStore.setIceCandidate(value)
    }
  )

  watch(
    () => isConnected.value,
    (value) => {
      if (!value) return

      if (receiverId?.length) {
        socketsStore.notifyReceiver(receiverId)
        webRTCStore.startBroadcasting(receiverId)
      } else {
        webRTCStore.startListening()
      }
    }
  )

  return {
    webRTCStore,
    socketsStore,
    mediaStream,
  }
}

export { useScreenStreaming }
