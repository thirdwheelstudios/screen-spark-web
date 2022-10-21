<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useScreenStreaming } from '../composables'
import CenteredContainer from '../components/CenteredContainer.vue'
import IconInfoCard from '../components/IconInfoCard.vue'

interface Props {
  receiverId: string
}

const props = defineProps<Props>()

const state = reactive({
  errorMessage: '',
})

const { localMediaStream } = useScreenStreaming(props.receiverId)

const getDisplayMedia = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: true,
    })

    localMediaStream.value = mediaStream
  } catch (error) {
    console.error(error)
    state.errorMessage = 'Unable to get display media, please try again'
  }
}

onMounted(async () => {
  await getDisplayMedia()
})
</script>

<template>
  <CenteredContainer
    ><template v-if="localMediaStream">Broadcasting: {{ receiverId }}</template>
    <IconInfoCard
      v-else-if="state.errorMessage.length"
      icon="display"
      header="Unable to share screen"
    >
      {{ state.errorMessage }}
      <button class="btn btn-primary" type="button" @click="getDisplayMedia">
        Try Again
      </button>
    </IconInfoCard>
    <template v-else
      >Init Broadcast: {{ receiverId }}</template
    ></CenteredContainer
  >
</template>
