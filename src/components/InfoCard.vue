<script setup lang="ts">
interface Props {
  header?: string
  shadow?: boolean
}

withDefaults(defineProps<Props>(), {
  shadow: false,
})
</script>

<template>
  <div class="card" :class="{ shadow: shadow }">
    <h5 v-if="header" class="card-header">{{ header }}</h5>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
