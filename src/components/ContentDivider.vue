<template>
  <div>
    <hr class="mx-1" />
    <slot></slot>
    <hr class="mx-1" />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;

  hr {
    flex-grow: 1;
  }
}
</style>
