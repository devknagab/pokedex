import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import { useState } from "react";

function App() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  // need the pokemon id to be passed to the pokemon details page
  const pokemonDetailsFromCardComponentHandler = (
    pokemonDetailsFromCardComponent
  ) => {
    console.log(
      "App Component Pokemon Details: ",
      pokemonDetailsFromCardComponent
    );
    setPokemonDetails(pokemonDetailsFromCardComponent);
  };

  return (
    <div className="App">
      {/* define a route  */}
      <h1> Pokedex</h1>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Card pokemonDetails={pokemonDetailsFromCardComponentHandler} />
      </Route>
      <Route path="/pokemonDetails/:pokemonId">
        <PokemonDetails pokemonDetailsFromCardComponent={pokemonDetails} />
      </Route>
    </div>
  );
}

export default App;
