import React, { useState, useEffect } from 'react';

const PokemonComponent = () => {
  const [pokemon, setPokemon] = useState('pikachu');  // Pokémon inicial
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hook personalizado para llamar a la API de Pokémon
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        //web.dragonball-api.com
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) throw new Error('Error al obtener el Pokémon');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemon]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pokédex</h1>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Altura: {data.height} decímetros</p>
          <p>Peso: {data.weight} hectogramos</p>
        </div>
      )}
    </div>
  );
};

export default PokemonComponent;