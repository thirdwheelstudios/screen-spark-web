<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <main>
    <NavigationBar class="navbar" />
    <section>
      <router-view />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: #fff;
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
  }

  section {
    padding-top: 75px;
  }
}

main.dark-mode {
  background-color: rgb(15 23 42);
}
</style>
