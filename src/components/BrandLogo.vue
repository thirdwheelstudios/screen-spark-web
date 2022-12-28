<script setup lang="ts">
interface Props {
  small?: boolean
}

withDefaults(defineProps<Props>(), { small: false })
</script>

<template>
  <div class="brand-container" :class="{ 'brand-small': small }">
    <img src="../assets/screen-spark-flame.svg" />
    <div>Screen Spark</div>
  </div>
</template>

<style scoped lang="scss">
.brand-container {
  color: #5dacbd;
  font-family: 'Montserrat', sans-serif;

  img {
    margin: 2rem;
  }

  div {
    display: inline-block;
    text-transform: uppercase;
    text-shadow: #5dacbd 1px 1px 12px;
    font-size: 48px;
    vertical-align: middle;
  }
}

.brand-container.brand-small {
  img {
    height: 48px;
    margin: 0 0.5rem;
  }

  div {
    font-size: 1.25rem;
  }
}
</style>
