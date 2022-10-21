<template>
  <div class="centered-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.centered-container {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
