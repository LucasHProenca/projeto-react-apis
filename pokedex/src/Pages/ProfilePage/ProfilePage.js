import React from "react";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { globalContext } from "../../GlobalState/GlobalStateContext";
import { PokemonProfilePageEstilizacao, Profile } from "./profilePageStyle";

const ProfilePage = () => {

    const context = useContext(globalContext)
    const {pokemonList, pokedex} = context

    let pathParams = useParams()
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
            return<PokemonProfilePageEstilizacao>
            <Profile>Profile {pathParams.name}</Profile>
            {pokedex.map((poke) => {
              if(poke.data.name === pathParams.name) {
                return<PokemonCard key = {poke.id} id = {poke.data.id} name = {poke.data.name} type = {poke.data.types} image = {poke.data.sprites.other["official-artwork"].front_default} poke = {poke}/>
              }
            })}
          </PokemonProfilePageEstilizacao>
        } else if (verificaLista) {
            return<PokemonProfilePageEstilizacao>
            <Profile>Profile {pathParams.name}</Profile>
            {pokemonList.map((poke) => {
              if(poke.data.name === pathParams.name) {
                return<PokemonCard key = {poke.id} id = {poke.data.id} name = {poke.data.name} type = {poke.data.types} image = {poke.data.sprites.other["official-artwork"].front_default} poke = {poke}/>
              }
            })}
          </PokemonProfilePageEstilizacao>
        }
    }
    
    return(
        <>
        {result()}
        </>
    )
}

export default ProfilePage