<script setup lang="ts">
import InfoCard from './InfoCard.vue'
interface Props {
  header?: string
  icon: string
  spin?: boolean
  shadow?: boolean
}

withDefaults(defineProps<Props>(), {
  spin: false,
  shadow: false,
})
</script>

<template>
  <InfoCard :header="header" :shadow="shadow">
    <div class="content">
      <font-awesome-icon
        :icon="['fas', icon]"
        size="3x"
        :spin="spin"
        class="icon"
      />
      <slot />
    </div>
  </InfoCard>
</template>

<style scoped lang="scss">
.content {
  text-align: center;
}
</style>
