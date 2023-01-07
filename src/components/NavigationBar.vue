<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BrandLogo from './BrandLogo.vue'

const router = useRouter()

const isCollapsed = ref(true)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><BrandLogo :small="true"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isCollapsed = !isCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse"
        id="navbarNav"
        :class="{ collapse: isCollapsed }"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/viewer" class="nav-link">Viewer</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/account" class="nav-link">Account</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <router-link to="login">
            <button class="btn btn-outline-info me-2">Login</button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  z-index: 10;

  .navbar-nav {
    flex-grow: 1;
  }
}
</style>
