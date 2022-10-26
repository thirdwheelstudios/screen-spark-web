<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <NavigationBar class="navbar" />
  <main>
    <router-view />
  </main>
</template>

<style scoped lang="scss">
main {
  .navbar {
    position: fixed;
    width: 100%;
  }
}
</style>
