import React, { useState } from "react"
import { Progress } from "@chakra-ui/react"
import {
    PokemonCardContainer,
    PokemonId,
    PokemonName,
    TypesContainer,
    PokemonType,
    PokemonDetail,
    Pokemon,
    Button,
    Pokeball,
    PokemonDetalhesCard,
    InformacoesPokemon,
    PokeballDetails,
    ContainerDeTipos,
    QuadrosBrancos,
    QuadrosAEsquerda,
    QuadroGrandeBranco,
    BaseStats,
    QuadroADireita,
    UltimoQuadro,
    StatusDoPokemon,
    NomeDoStatus,
    ValorNumericoStatus,
    BarrasDePoder,
    PokemonNosDetalhes
} from "./pokemonCardStyle"
import PokebalImage from "../../Midia/pokeball.png"
import { goToDetails } from "../../Router/Coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import {getColors} from "../../utils/ReturnCardColor"
import {getTypes} from "../../utils/ReturnPokemonType"

const PokemonCard = ({id, name, type, image, adicionaPokemon, removePokemon, poke }) => {

    const navigate = useNavigate()
    let parametros = useLocation()

    const renderizaTela = () => {
        if(parametros.pathname === "/" ) {
                return <PokemonCardContainer color = {getColors(poke.data.types[0].type.name)}>
                    <div>
                        <PokemonId>#{id.toString().length === 1? `0${id}` : `${id}`}</PokemonId>
                        <PokemonName>{name[0].toUpperCase() + name.substring(1)}</PokemonName>
                        <TypesContainer>
                            {type.map((type) => {
                                return <PokemonType
                                key={type.id}
                                src={getTypes(type.type.name)}
                                />
                            })}
                        </TypesContainer>
                        <PokemonDetail onClick={() => {
                            goToDetails(navigate, name)
                        }}>Detalhes</PokemonDetail>
                    </div>
                    <div>
                        <Pokemon src={image} />
                        <Button onClick = {() => {
                            adicionaPokemon(poke)
                            }}>Capturar!</Button>
                    
                    <Pokeball src={PokebalImage} alt="pokeball" />
                    </div>
                </PokemonCardContainer>
        }else if(parametros.pathname === "/pokedex/" ) {
                return <PokemonCardContainer color = {getColors(poke.data.types[0].type.name)}>
                    <div>
                        <PokemonId>#{id.toString().length === 1? `0${id}` : `${id}`}</PokemonId>
                        <PokemonName>{name[0].toUpperCase() + name.substring(1)}</PokemonName>
                        <TypesContainer>
                        {type.map((type) => {
                                return <PokemonType
                                key={type.id}
                                src={getTypes(type.type.name)}
                                />
                            })}
                        </TypesContainer>
                        <PokemonDetail onClick={() => {
                            goToDetails(navigate, name)
                        }}>Detalhes</PokemonDetail>
                    </div>
                    <div>
                        <Pokemon src={image} />
                        <Button onClick={() => removePokemon(poke)}>Excluir!</Button>
                    
                    <Pokeball src={PokebalImage} alt="pokeball" />
                    </div>
                </PokemonCardContainer>
        }else if (parametros.pathname.includes("/pokemon-detail/")) {
                return <PokemonDetalhesCard color = {getColors(poke.data.types[0].type.name)} >
                    <QuadroGrandeBranco>
                    <QuadrosBrancos>
                        <QuadrosAEsquerda >
                            <img src={poke.data.sprites.front_default}/>
                        </QuadrosAEsquerda>
                        <QuadrosAEsquerda>
                        <img src={poke.data.sprites.back_default}/>    
                        </QuadrosAEsquerda>
                    </QuadrosBrancos>
                    <BaseStats>
                    <h2>Base Stats</h2>
                    <StatusDoPokemon>
                        {poke.data.stats.map((pokemon) => {
                            console.log(pokemon.base_stat)
                            return<div>
                                <NomeDoStatus key = {pokemon.id}>
                                    {pokemon.stat.name[0].toUpperCase() + pokemon.stat.name.substring(1)}
                                </NomeDoStatus>
                                <ValorNumericoStatus>
                                    {pokemon.base_stat}
                                </ValorNumericoStatus>
                                <BarrasDePoder>
                                    <Progress size={"lg"} max={150} value={pokemon.base_stat }></Progress>
                                </BarrasDePoder>
                            </div>
                        })}
                    </StatusDoPokemon>
                    </BaseStats>
                    <UltimoQuadro>
                    <InformacoesPokemon>
                        <PokemonId>#{id.toString().length === 1? `0${id}` : `${id}`}</PokemonId>
                        <PokemonName>{name[0].toUpperCase() + name.substring(1)}</PokemonName>
                        <ContainerDeTipos>
                        {type.map((type) => {
                                return <PokemonType
                                key={type.id}
                                src={getTypes(type.type.name)}
                                />
                            })}
                        </ContainerDeTipos>
                    </InformacoesPokemon>
                    <QuadroADireita>
                    <h2>Moves</h2>
                    <div>
                    {poke.data.moves.map((pokemon, id) => {
                        return id < 10 && <p key={id}>{pokemon.move.name[0].toUpperCase() + pokemon.move.name.substring(1)}</p>
                    })}
                    </div>
                    </QuadroADireita>
                    </UltimoQuadro>
                    </QuadroGrandeBranco>
                        <Pokemon src={image} />
                    <PokeballDetails src={PokebalImage} alt="pokeball" />
                </PokemonDetalhesCard>
        }
    }
    return (
        renderizaTela()
    )
    }
export default PokemonCard