import React from "react"
import { PokemonListEstilizacao, TodosOsPokemons } from "./pokemonListPageStyle"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const PokemonListPage = () => {
    return(
        <PokemonListEstilizacao>
          <TodosOsPokemons>Todos os Pokemons</TodosOsPokemons>
      <PokemonCard/>
    </PokemonListEstilizacao>
    )
}

export default PokemonListPage
