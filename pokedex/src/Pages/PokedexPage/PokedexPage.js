import React, { useContext } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { PokedexPageEstilizacao, MeusPokemons, ContainerPokemon, ContainerFiltro } from "./pokedexPageStyle"



const PokedexPage = () => {

  const context = useContext(globalContext)
  const { pokedex, removePokemon, searchFilter, setSearchFilter } = context

  const onChangeSearchFilter = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <PokedexPageEstilizacao>
      <ContainerFiltro>
        <MeusPokemons>Meus Pokémons</MeusPokemons>
        <label htmlFor="buscaNome">
          <input id="buscaNome" placeholder="🔍" value={searchFilter} onChange={onChangeSearchFilter}></input>
        </label>
      </ContainerFiltro>
      <ContainerPokemon>
        {pokedex
          .filter((poke) => {
            if (searchFilter && poke.data.name.toLowerCase().includes(searchFilter.toLowerCase())) {
              return poke;
            } else if (!searchFilter) {
              return poke
            }
          })
          .sort((a, b) => {
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