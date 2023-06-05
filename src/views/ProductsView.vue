<template>
  <main id="Products" class="container">
    <span @click="handleClick">product_01</span>
  </main>
</template>

<script setup>
import { } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  router.push('/details/1')
}
</script>

<style scoped>
.container {
  min-height: 200vh;
}
</style>