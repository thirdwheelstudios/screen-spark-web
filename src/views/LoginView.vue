<script setup lang="ts">
import { ref } from 'vue'
import ContentDivider from '../components/ContentDivider.vue';

const email = ref<string>()

const formSubmitted = () => {}
</script>

<template>
  <div class="login-container">
    <div>
      <router-link to="/" class="brand m-3">
        <img src="../assets/screen-spark-flame.svg" title="Screen Spark"
      /></router-link>
      <span>To continue, please sign in</span>
    </div>
    <div class="m-3">
      <form action="post" @submit.prevent="formSubmitted">
        <h3>Sign in</h3>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Sign in with Google
          </button>
          <button class="btn btn-primary" type="button">
            Sign in with Apple
          </button>
        </div>
        <ContentDivider>or</ContentDivider>
        <div class="mb-3">
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  > div {
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    justify-content: center;

    .brand {
      display: flex;
      justify-content: center;
    }

    form {
      text-align: left;
      max-width: 400px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .login-container {
    flex-direction: column;

    div {
      margin: 2rem auto;
      flex-grow: 0;

      .brand {
        img {
          max-width: 35%;
        }
      }
    }
  }
}
</style>
