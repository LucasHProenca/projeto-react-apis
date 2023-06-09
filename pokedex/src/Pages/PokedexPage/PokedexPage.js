import React from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PokedexPageEstilizacao, MeusPokemons } from "./pokedexPageStyle"


const PokedexPage = () => {
    return(
        <PokedexPageEstilizacao>
      <MeusPokemons>Meus Pokemons</MeusPokemons>
      <PokemonCard/>
    </PokedexPageEstilizacao>
    )
}

export default PokedexPage