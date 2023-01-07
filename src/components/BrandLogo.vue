<script setup lang="ts">
interface Props {
  small?: boolean
}

withDefaults(defineProps<Props>(), { small: false })
</script>

<template>
  <div class="brand-container" :class="{ 'brand-small': small }">
    <img src="../assets/screen-spark-flame.svg" />
    <div>
      <div>Screen Spark</div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
$brand-color: #5dacbd;

.brand-container {
  color: $brand-color;
  font-family: 'Montserrat', sans-serif;

  img {
    margin: 2rem;
  }

  div {
    display: block;

    div {
      text-transform: uppercase;
      text-shadow: $brand-color 1px 1px 12px;
      font-size: 48px;
      vertical-align: middle;
    }
  }
}

.brand-container.brand-small {
  img {
    height: 48px;
    margin: 0 0.5rem;
    margin-right: 1rem;
  }

  div {
    display: inline-block;
    font-size: 1.25rem;
  }
}
</style>
