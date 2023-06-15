import { useLocation, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { PokemonDetailsPageEstilizacao, Detalhes } from "./pokemonDetailPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { globalContext } from "../../GlobalState/GlobalStateContext";

const PokemonDetailPage = () => {

  const context = useContext(globalContext)
  const {pokemonList, pokedex} = context
    
    let pathParams = useParams();
    console.log(pathParams);
    let parametros = useLocation()

    const nome = parametros.pathname.split("/")[2]

    const verificaPokemon = pokedex.find((pokemon) =>
        pokemon.data.name === nome
    )

    const verificaLista = pokemonList.find((pokemon) =>
    pokemon.data.name === nome
    )

    const result = () => {
        
      if (verificaPokemon) {
          return<PokemonDetailsPageEstilizacao>
          <Detalhes>Detalhes {pathParams.name}</Detalhes>
          {pokedex.map((poke) => {
            if(poke.data.name === pathParams.name) {
              return<PokemonCard key = {poke.id} id = {poke.data.id} name = {poke.data.name} type = {poke.data.types} image = {poke.data.sprites.other["official-artwork"].front_default} poke = {poke}/>
            }
          })}
        </PokemonDetailsPageEstilizacao>
      } else if (verificaLista) {
          return<PokemonDetailsPageEstilizacao>
          <Detalhes>Detalhes {pathParams.name}</Detalhes>
          {pokemonList.map((poke) => {
            if(poke.data.name === pathParams.name) {
              return<PokemonCard key = {poke.id} id = {poke.data.id} name = {poke.data.name} type = {poke.data.types} image = {poke.data.sprites.other["official-artwork"].front_default} poke = {poke}/>
            }
          })}
        </PokemonDetailsPageEstilizacao>
      }
  }
    return(
      <>
        {result()}
        </>
    )
}

export default PokemonDetailPage