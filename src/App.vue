<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <NavigationBar class="navbar" />
  <div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.navbar {
  position: sticky;
}
</style>
