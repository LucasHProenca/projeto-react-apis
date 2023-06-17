import React, { useContext } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { PokedexPageEstilizacao, MeusPokemons, ContainerPokemon } from "./pokedexPageStyle"



const PokedexPage = () => {

  const context = useContext(globalContext)
  const {pokedex, removePokemon} = context

  return (
    <PokedexPageEstilizacao>
      <MeusPokemons>Meus Pokémons</MeusPokemons>
      <ContainerPokemon>
        {pokedex.sort((a, b) => {
          return a.data.id - b.data.id
        })
          .map((poke) => {
            return <PokemonCard key={poke.id} id={poke.data.id} name={poke.data.name} type={poke.data.types} image={poke.data.sprites.other["official-artwork"].front_default} poke={poke} removePokemon={removePokemon} />
          })}
      </ContainerPokemon>
    </PokedexPageEstilizacao>
  )
}

export default PokedexPage