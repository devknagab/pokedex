import React, { useEffect, useState, useCallback } from "react";
import pikachu from "../assets/pikachu.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log("Card Props:", props);
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  // get the information from pokeApi
  const fetchPokemonDetails = useCallback(async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      console.log(data);
      setPokemons(data.results);
      setTotalPokemonCount(data.count);
      console.log("Pokemons:", pokemons);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // can we cache the requests here
  const getPokemonDetails = async () => {
    // actually we can just loop in the id to get all the pokemons
    // let us just get 20 pokemons
    let allData = [];
    for (let id = 1; id < 21; id++) {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const data = await response.json();
      // structure the data obtained]
      console.log(data);
      const structuredData = structureDataObtained(data);
      allData.push(structuredData);
    }
    setPokemonDetails(allData);
    console.log("Pokemon Details", pokemonDetails);
  };

  useEffect(() => {
    fetchPokemonDetails();
    getPokemonDetails();
  }, [fetchPokemonDetails]);

  props.pokemonDetails(pokemonDetails);

  // from the url obtained we need to get the images displayed as we as store all the information required
  // instead of making multiple requests
  // we need an array of objects which has the necessary information for the pokemons
  //    {
  //    id:..,
  //    name: ...,
  //    image: ...
  //    ...
  //    }

  const structureDataObtained = (data) => {
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
    };
  };
  return (
    <>
      <ul>
        {pokemonDetails.map((pokemon) => (
          //   <li key={pokemon.name}> {pokemon.name} </li>
          <Link to={"/pokemonDetails/:" + pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} width="150px" />
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Card;
