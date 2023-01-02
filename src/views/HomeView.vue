<script setup lang="ts">
import BrandLogo from '../components/BrandLogo.vue'
import ParticlesContainer from '../components/ParticlesContainer.vue'
</script>

<template>
  <ParticlesContainer :number-of-particles="50" class="hero"
    ><div class="m-2">
      <BrandLogo
        ><span>Device to device screen sharing made easy</span></BrandLogo
      ><button class="btn btn-primary m-4">Get Started</button>
    </div></ParticlesContainer
  >
  <div class="container">
    <div class="row m-3">
      <div class="col">
        <h4>Why choose Screen Spark?</h4>
        <div class="d-flex justify-content-evenly">
          <div>Hello</div>
          <div>World</div>
          <div>Hello</div>
          <div>World</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$brand-color: #5dacbd;

.hero {
  box-shadow: 0 0 3px $brand-color;

  span {
    text-transform: lowercase;
  }
}

div {
  text-align: center;
}
</style>
