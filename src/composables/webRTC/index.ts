import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useSocketsStore, useWebRTCStore } from '../../store'

const useWebRTC = (isBroadcasting: boolean) => {
  const webRTCStore = useWebRTCStore()
  const socketsStore = useSocketsStore()

  const { sdp, candidate } = storeToRefs(socketsStore)

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
  }
}

export { useWebRTC }
