<script setup lang="ts">
import BrandLogo from '../components/BrandLogo.vue'
import ParticlesContainer from '../components/ParticlesContainer.vue'
</script>

<template>
  <ParticlesContainer :number-of-particles="80"
    ><div>
      <BrandLogo /><button class="btn btn-primary">Get Started</button>
    </div></ParticlesContainer
  >
</template>

<style scoped lang="scss">
div {
  text-align: center;
}
</style>
