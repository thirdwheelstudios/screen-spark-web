<script setup lang="ts">
import InfoPanel from './InfoCard.vue'

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
    <InfoPanel :icon="icon" :spin="spin" class="centered-panel"
      ><slot
    /></InfoPanel>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  position: relative;
  margin: auto;

  .centered-panel {
    margin: auto;
  }
}
</style>
