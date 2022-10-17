<script setup lang="ts">
interface Props {
  message: string
  icon: string
  spin?: boolean
}

withDefaults(defineProps<Props>(), {
  spin: false,
})
</script>

<template>
  <div>
    <font-awesome-icon :icon="['fas', icon]" size="3x" :spin="spin" />
    <p>{{ message }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
}
</style>
