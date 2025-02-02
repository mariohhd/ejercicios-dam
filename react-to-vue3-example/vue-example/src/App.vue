<template>
  <div class="container">
    <Card
      title="Sample Card"
      description="This is a sample card component built with Vue 3"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/500px-Vue.js_Logo_2.svg.png"
    />
  </div>
</template>

<script setup>
import Card from './components/Card.vue'
</script>

<style>
.container {
  padding: 20px;
}
</style>
