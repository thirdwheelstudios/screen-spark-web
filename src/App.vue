<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <NavigationBar class="navbar" />
  <main>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <router-view />
  </main>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

main {
  .navbar {
    position: fixed;
    width: 100%;
  }
}
</style>
