<script setup lang="ts">
import { useNetlifyIdentity } from '../composables'

const { open, openLogin, openSignup } = useNetlifyIdentity()
</script>

<template>
    <button @click="open">Open</button>
    <button @click="openLogin">Login</button>
    <button @click="openSignup">Signup</button>
</template>
