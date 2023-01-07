<script setup lang="ts">
import BrandLogo from '../components/BrandLogo.vue'
import ParticlesContainer from '../components/ParticlesContainer.vue'
</script>

<template>
  <ParticlesContainer class="hero"
    ><div class="m-2">
      <BrandLogo
        ><span>Device to device screen sharing made easy</span></BrandLogo
      ><button class="btn btn-primary m-4">Get Started</button>
    </div></ParticlesContainer
  >
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3">
        <div>Hello</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div>World</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div>Hello</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div>World</div>
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
