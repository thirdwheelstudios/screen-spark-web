<script setup lang="ts">
import { onMounted } from 'vue'
import { useScreenStreaming } from '../composables'

interface Props {
  receiverId: string
}

const props = defineProps<Props>()

const { socketsStore, webRTCStore } = useScreenStreaming(props.receiverId)

onMounted(() => {})
</script>

<template>Broadcaster: {{ receiverId }}</template>
