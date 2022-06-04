import React from "react";
import { useParams } from "react-router";
const PokemonDetails = (props) => {
  console.log("Pokemon Details Porps", props);
  // display the respective pokemon details when i click the pokemon
  const params = useParams();
  debugger;
  console.log(params); // key values pairs
  let slicedPokemonId = params.pokemonId.slice(1);
  console.log(slicedPokemonId);

  const filterPokemon = () => {
    debugger;

    let obj1 = [
      {
        value: 1,
      },
      {
        value: 2,
      },
    ];

    console.log(obj1);

    console.log(props.pokemonDetailsFromCardComponent);
    let pokemonDetailsArray = [];

    // for (let i = 0; i < props.pokemonDetailsFromCardComponent.length; i++) {
    //   pokemonDetailsArray.push(props.pokemonDetailsFromCardComponent[i]);
    // }
    // console.log(pokemonDetailsArray);
    const filtered = props.pokemonDetailsFromCardComponent.filter(
      ({ id }) => id === slicedPokemonId
    );
    console.log(filtered);
  };
  return (
    <>
      <h1> Pokemon Details Page </h1>
      {/* need to filter the props for the id that was clicked  */}
      {/* <img src={props} alt={} width="300px"> */}
      <button onClick={filterPokemon}> Filter </button>
    </>
  );
};

export default PokemonDetails;
