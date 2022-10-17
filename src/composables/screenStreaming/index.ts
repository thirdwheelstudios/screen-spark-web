import { storeToRefs } from 'pinia'
import { computed, onMounted, watch } from 'vue'
import { useSocketsStore, useWebRTCStore } from '../../store'

const useScreenStreaming = (isBroadcasting: boolean) => {
  const webRTCStore = useWebRTCStore()
  const socketsStore = useSocketsStore()

  const { sdp, candidate } = storeToRefs(socketsStore)
  const { track } = storeToRefs(webRTCStore)

  const mediaStream = computed(() => {
    if (!track.value) return

    const ms = new MediaStream()

    ms.addTrack(track.value)

    return ms
  })

  onMounted(() => {
    if (!isBroadcasting) webRTCStore.startListening()
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

  return {
    webRTCStore,
    socketsStore,
    mediaStream,
  }
}

export { useScreenStreaming }
