<script setup lang="ts">
interface Props {
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
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
