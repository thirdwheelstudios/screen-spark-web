<script setup lang="ts">
import { ref, watch } from 'vue'
import QRCode from 'qrcode'

interface Props {
  dataToEncode: string
}

const props = defineProps<Props>()

const dataUrl = ref<string>()

watch(
  () => props.dataToEncode,
  async (value) => {
    dataUrl.value = await QRCode.toDataURL(value, { width: 300 })
  },
  { immediate: true }
)
</script>

<template>
  <img :src="dataUrl" title="QR Code to allow screen streaming" />
</template>
