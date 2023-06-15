import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage"
import Header from "../Components/Header/Header"
import { useEffect, useState } from "react";
import listaPoke from "../assets/listaPoke/listaPoke";
import axios from "axios";

const Router = () => { 
  
  const [pokedex, setPokedex] = useState([])
  const [pokemonList, setPokemonList] = useState([])

  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonList(res));
  };

  const adicionaPokemon = (poke) => {
    setPokedex([...pokedex, poke])
    const newPokemonList = pokemonList.filter((pokemon) => {
        if (pokemon.data.id === poke.data.id) {
          console.log("oiee to aqui")
        return pokemon.data.id !== poke.data.id
      } else {
        return poke
      }
      })
      setPokemonList(newPokemonList)
    }

    const removePokemon = (poke) => {
      const newPokemonToPokedex = pokedex.find((thing) => thing.data.id === poke.data.id)
      if (newPokemonToPokedex) {
        const newPokedex = pokedex.filter((pokemon) => {
          return pokemon.data.id !== poke.data.id
        })
        setPokedex(newPokedex)
        setPokemonList([...pokemonList, poke])
      } 
      }


  

    return(
        <BrowserRouter>
      <Header pokedex = {pokedex} adicionaPokemon = {adicionaPokemon} removePokemon = {removePokemon} pokemonList = {pokemonList} />
      <Routes>
        <Route path="/" element={<PokemonListPage adicionaPokemon = {adicionaPokemon} pokemonList = {pokemonList} setPokemonList = {setPokemonList} />} />
        <Route path="/pokedex/" element={<PokedexPage removePokemon = {removePokemon} pokedex = {pokedex} setPokedex = {setPokedex} />} />
        <Route path="/pokemon-detail/:name" element={<PokemonDetailPage pokemonList = {pokemonList} pokedex = {pokedex} />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Router
