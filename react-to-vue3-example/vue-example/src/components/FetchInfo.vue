<template>
  <div>
    <h1>Pokédex</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else v-if="data">
      <h2>{{ data.name }}</h2>
      <img :src="data.sprites.front_default" :alt="data.name" />
      <p>Altura: {{ data.height }} decímetros</p>
      <p>Peso: {{ data.weight }} hectogramos</p>
      </div>
    </div>
</template>
  
<script setup>
  import { onMounted, ref } from 'vue';
  const pokemon = ref('pikachu'); // Pokémon inicial
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

    // Función para obtener los datos del Pokémon
    const fetchPokemon = async () => {
      try {
        loading.value = true;
        error.value = null;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`);
        if (!response.ok) throw new Error('Error al obtener el Pokémon');
        data.value = await response.json();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };
    // Al montarse la app de vue se llama al fetch
    onMounted(() => {
      fetchPokemon();
    });
  </script>
  