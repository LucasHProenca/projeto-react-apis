import React, { useContext } from "react"
import { PokemonListEstilizacao, TodosOsPokemons, ContainerPokemon } from "./pokemonListPageStyle"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"

const PokemonListPage = () => {

  const context = useContext(globalContext)
  const {adicionaPokemon, pokemonList} = context

    return(
        <PokemonListEstilizacao>
          <TodosOsPokemons>Todos os Pokemons</TodosOsPokemons>
          <ContainerPokemon>
          {pokemonList
          .sort((a,b) => {
            return a.data.id - b.data.id
          })
          .map((poke) => {
            return<PokemonCard key = {poke.id} id = {poke.data.id} name = {poke.data.name} type = {poke.data.types} image = {poke.data.sprites.other["official-artwork"].front_default} adicionaPokemon = {adicionaPokemon} poke = {poke}/>
          })}
          </ContainerPokemon>
    </PokemonListEstilizacao>
    )
}

export default PokemonListPage
