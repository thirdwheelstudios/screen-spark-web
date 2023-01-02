<script setup lang="ts">
import { ref } from 'vue'
import { useNetlifyIdentity } from '../composables'
import BrandLogo from './BrandLogo.vue'

const { openLogin, openSignup } = useNetlifyIdentity()

const isCollapsed = ref(true)
</script>

<template>
  <nav class="navbar navbar-expand-lg">
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
        <form class="d-flex" @submit.prevent="openLogin">
          <button class="btn btn-outline-primary me-2" type="submit">
            Login
          </button>
          <button
            class="btn btn-outline-success"
            type="button"
            @click="openSignup"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
$brand-color: #5dacbd;

nav {
  z-index: 10;

  .navbar-nav {
    flex-grow: 1;
  }

  .navbar-toggler {
    background-color: $brand-color;
  }
}
</style>
