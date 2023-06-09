import React, { useState } from "react"
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
    UltimoQuadro
} from "./pokemonCardStyle"
import Grass from "../../Midia/grass.png"
import Poison from "../../Midia/poison.png"
import Bulbasaur from "../../Midia/bulbasaur.png"
import PokebalImage from "../../Midia/pokeball.png"
import { goToDetails } from "../../Router/Coordinator"
import { useLocation, useNavigate } from "react-router-dom"

const PokemonCard = () => {

    const navigate = useNavigate()
    let parametros = useLocation()

    const renderizaTela = () => {
        switch (parametros.pathname) {
            case "/":
                return <PokemonCardContainer>
                    <div>
                        <PokemonId>#01</PokemonId>
                        <PokemonName>Bulbasaur</PokemonName>
                        <TypesContainer>
                            <PokemonType src={Grass} />
                            <PokemonType src={Poison} />
                        </TypesContainer>
                        <PokemonDetail onClick={() => {
                            goToDetails(navigate)
                        }}>Detalhes</PokemonDetail>
                    </div>
                    <div>
                        <Pokemon src={Bulbasaur} />
                        <Button>Capturar!</Button>
                    
                    <Pokeball src={PokebalImage} alt="pokeball" />
                    </div>
                </PokemonCardContainer>
            case "/pokedex/":
                return <PokemonCardContainer>
                    <div>
                        <PokemonId>#01</PokemonId>
                        <PokemonName>Bulbasaur</PokemonName>
                        <TypesContainer>
                            <PokemonType src={Grass} />
                            <PokemonType src={Poison} />
                        </TypesContainer>
                        <PokemonDetail onClick={() => {
                            goToDetails(navigate)
                        }}>Detalhes</PokemonDetail>
                    </div>
                    <div>
                        <Pokemon src={Bulbasaur} />
                        <Button>Capturar!</Button>
                    
                    <Pokeball src={PokebalImage} alt="pokeball" />
                    </div>
                </PokemonCardContainer>
            case `/pokemon-detail/`:
                return <PokemonDetalhesCard>
                    <QuadroGrandeBranco>
                    <QuadrosBrancos>
                        <QuadrosAEsquerda>
                            Este é o primeiro quadro
                        </QuadrosAEsquerda>
                        <QuadrosAEsquerda>
                            Este é o quadro de baixo
                        </QuadrosAEsquerda>
                    </QuadrosBrancos>
                    <BaseStats>
                    Este é o Base Stats
                    </BaseStats>
                    <UltimoQuadro>
                    <InformacoesPokemon>
                        <PokemonId>#01</PokemonId>
                        <PokemonName>Bulbasaur</PokemonName>
                        <ContainerDeTipos>
                            <PokemonType src={Grass} />
                            <PokemonType src={Poison} />
                        </ContainerDeTipos>
                    </InformacoesPokemon>
                    <QuadroADireita>Moves</QuadroADireita>
                    </UltimoQuadro>
                    </QuadroGrandeBranco>
                        <Pokemon src={Bulbasaur} />
                    <PokeballDetails src={PokebalImage} alt="pokeball" />
                </PokemonDetalhesCard>
        }
    }
    return (
        renderizaTela()
    )
}
export default PokemonCard