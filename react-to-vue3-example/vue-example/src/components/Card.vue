<template>
  <div class="card" :class="{ 'dark-theme': isDarkTheme }">
    <img v-if="imageUrl" :src="imageUrl" :alt="title" class="card-image">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    
    <div class="button-container">
      <button class="like-button" @click="handleLike">
        ❤️ {{ likes }} Likes
      </button>
      <button 
        class="theme-button" 
        :class="{ 'dark': isDarkTheme }"
        @click="toggleTheme"
      >
        Toggle Theme
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  }
})

const likes = ref(0)
const isDarkTheme = ref(false)

const handleLike = () => {
  likes.value++
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;
}

.card.dark-theme {
  background-color: #333;
  color: #fff;
}

.card.dark-theme p {
  color: #ccc;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

h2 {
  margin-top: 12px;
  font-size: 1.5rem;
}

p {
  color: #666;
}

.button-container {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.like-button {
  background-color: #007bff;
  color: white;
}

.theme-button {
  background-color: #343a40;
  color: #fff;
}

.theme-button.dark {
  background-color: #f8f9fa;
  color: #000;
}
</style>
