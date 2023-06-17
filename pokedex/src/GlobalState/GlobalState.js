import axios from "axios";
import { useEffect, useState } from "react";
import { globalContext } from "./GlobalStateContext";

export const GlobalState = ({children}) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonModalIsOpen, setPokemonModalIsOpen] = useState(false)
    const [action, setAction] = useState(0)


    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        let endpoints = [];
        for (let i = 1; i < 152; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemonList(res))
        .catch((err) => console.log(err.response))
    };

    const adicionaPokemon = (poke) => {
        setPokemonModalIsOpen(true)
        setAction(0)
        setPokedex([...pokedex, poke])
        const newPokemonList = pokemonList.filter((pokemon) => {
            if (pokemon.data.id === poke.data.id) {
                return pokemon.data.id !== poke.data.id
            } else {
                return poke
            }
        })
        setPokemonList(newPokemonList)
    }

    const removePokemon = (poke) => {
        setPokemonModalIsOpen(true)
        setAction(1)
        const newPokemonToPokedex = pokedex.find((thing) => thing.data.id === poke.data.id)
        if (newPokemonToPokedex) {
            const newPokedex = pokedex.filter((pokemon) => {
                return pokemon.data.id !== poke.data.id
            })
            setPokedex(newPokedex)
            setPokemonList([...pokemonList, poke])
        }
    }

    const context = {
        pokemonList,
        pokedex,
        adicionaPokemon,
        removePokemon,
        pokemonModalIsOpen,
        setPokemonModalIsOpen,
        action,
        setAction
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}