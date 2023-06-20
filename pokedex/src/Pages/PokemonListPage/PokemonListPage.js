import React, { useContext } from "react"
import { PokemonListEstilizacao, TodosOsPokemons, ContainerPokemon, ContainerFiltro } from "./pokemonListPageStyle"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"

const PokemonListPage = () => {

  const context = useContext(globalContext)
  const {adicionaPokemon, pokemonList, searchFilter, setSearchFilter} = context

const onChangeSearchFilter = (e) => {
  setSearchFilter(e.target.value)
}

    return(
        <PokemonListEstilizacao>
          <ContainerFiltro>
          <TodosOsPokemons>Todos os Pokémons</TodosOsPokemons>
          <label htmlFor="buscaNome">
                <input id="buscaNome" placeholder="🔍" value={searchFilter} onChange={onChangeSearchFilter}></input>
            </label>
            </ContainerFiltro>
          <ContainerPokemon>
          {pokemonList
          .filter((poke) => {
            if(searchFilter && poke.data.name.toLowerCase().includes(searchFilter.toLowerCase())){
              return poke;
            }else if(!searchFilter){
              return poke
            }
          })
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
