<template>
  <div class="centered-container m-3">
    <Transition mode="out-in">
      <slot />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.centered-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
