import React, { useState } from "react"
import {
    Progress,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react"
import {
    PokemonCardContainer,
    InformacoesDoPokemon,
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
    ContainerFrontEBack,
    ImagemFrontEBack,
    ContainerInformacoesDetails,
    BaseStats,
    Moves,
    BasicInfoEMoves,
    StatusDoPokemon,
    NomeDoStatus,
    ValorNumericoStatus,
    BarrasDePoder,
    PokePicDetails,
    PesoEAlturaContainer,
    AtaquesEspeciais,
    ContainerShiny,
    PokemonNosDetalhes
} from "./pokemonCardStyle"
import PokebalImage from "../../Midia/pokeball.png"
import { goToDetails, goToProfilePage } from "../../Router/Coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import { getColors } from "../../utils/ReturnCardColor"
import { getTypes } from "../../utils/ReturnPokemonType"

const PokemonCard = ({ id, name, type, image, adicionaPokemon, removePokemon, poke }) => {

    const navigate = useNavigate()
    let parametros = useLocation()

    const barraDeProgresso = (color) => {
        if (color <= 20) {
            return "red"
        } else if (color > 20 && color <= 50) {
            return "orange"
        } else if (color > 50 && color <= 80) {
            return "yellow"
        } else if (color > 80 && color <= 100) {
            return "blue"
        } else if (color > 100 && color <= 120) {
            return "teal"
        } else if (color > 120 && color <= 160) {
            return "green"
        }
    }

    const altura = poke.data.height
    const alturaEmMetros = altura / 10
    const peso = poke.data.weight
    const pesoEmKg = peso / 10
    let valores = 0

    const renderizaTela = () => {
        if (parametros.pathname === "/") {
            return <PokemonCardContainer color={getColors(poke.data.types[0].type.name)}>
                <InformacoesDoPokemon>
                    <PokemonId>#{id.toString().length === 1 ? `0${id}` : `${id}`}</PokemonId>
                    <PokemonName onClick={() => {
                        goToProfilePage(navigate, name)
                    }} >{name[0].toUpperCase() + name.substring(1)}</PokemonName>
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
                </InformacoesDoPokemon>
                <div>
                    <Pokemon src={image} />
                    <Button onClick={() => {
                        adicionaPokemon(poke)
                    }}>Capturar!</Button>

                    <Pokeball src={PokebalImage} alt="pokeball" />
                </div>
            </PokemonCardContainer>
        } else if (parametros.pathname === "/pokedex/") {
            return <PokemonCardContainer color={getColors(poke.data.types[0].type.name)}>
                <InformacoesDoPokemon>
                    <PokemonId>#{id.toString().length === 1 ? `0${id}` : `${id}`}</PokemonId>
                    <PokemonName onClick={() => {
                        goToProfilePage(navigate, name)
                    }} >{name[0].toUpperCase() + name.substring(1)}</PokemonName>
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
                </InformacoesDoPokemon>
                <div>
                    <Pokemon src={image} />
                    <Button style={{ backgroundColor: "#FF6262", color: "#FFFFFF" }} onClick={() => removePokemon(poke)}>Excluir!</Button>
                    <Pokeball src={PokebalImage} alt="pokeball" />
                </div>
            </PokemonCardContainer>
        } else if (parametros.pathname.includes("/pokemon-detail/")) {
            return <PokemonDetalhesCard color={getColors(poke.data.types[0].type.name)} >
                <ContainerInformacoesDetails>
                    <ContainerFrontEBack>
                        <ImagemFrontEBack >
                            <img src={poke.data.sprites.front_default} />
                        </ImagemFrontEBack>
                        <ImagemFrontEBack>
                            <img src={poke.data.sprites.back_default} />
                        </ImagemFrontEBack>
                    </ContainerFrontEBack>
                    <BaseStats>
                        <h2><strong>Base Stats</strong></h2>
                        <StatusDoPokemon>
                            {poke.data.stats.map((pokemon) => {
                                valores += pokemon.base_stat
                                return <div>
                                    <NomeDoStatus key={pokemon.id}>
                                        {pokemon.stat.name[0].toUpperCase() + pokemon.stat.name.substring(1)}
                                    </NomeDoStatus>
                                    <ValorNumericoStatus>
                                        {pokemon.base_stat}
                                    </ValorNumericoStatus>
                                    <BarrasDePoder>
                                        <Progress style={{ border: "0.1rem solid black", borderRadius: "0.3rem" }} colorScheme={barraDeProgresso(pokemon.base_stat)} size={"lg"} max={200} value={pokemon.base_stat} ></Progress>
                                    </BarrasDePoder>
                                </div>
                            })}
                            <h1>Total:{valores}</h1>
                        </StatusDoPokemon>
                    </BaseStats>
                    <BasicInfoEMoves>
                        <InformacoesPokemon>
                            <PokemonId>#{id.toString().length === 1 ? `0${id}` : `${id}`}</PokemonId>
                            <PokemonName onClick={() => {
                                goToProfilePage(navigate, name)
                            }} >{name[0].toUpperCase() + name.substring(1)}</PokemonName>
                            <ContainerDeTipos>
                                {type.map((type) => {
                                    return <PokemonType
                                        key={type.id}
                                        src={getTypes(type.type.name)}
                                    />
                                })}
                            </ContainerDeTipos>
                        </InformacoesPokemon>
                        <Moves>
                            <h2><strong>Moves</strong></h2>
                            <div>
                                {poke.data.moves.map((pokemon, id) => {
                                    return id < 7 && <p key={id}>{pokemon.move.name[0].toUpperCase() + pokemon.move.name.substring(1)}</p>
                                })}
                            </div>
                        </Moves>
                    </BasicInfoEMoves>
                </ContainerInformacoesDetails>
                <PokePicDetails src={image} />
                <PokeballDetails src={PokebalImage} alt="pokeball" />
            </PokemonDetalhesCard>
        } else if (parametros.pathname.includes("/pokemon-profile/")) {
            return <PokemonDetalhesCard color={getColors(poke.data.types[0].type.name)} >
                <ContainerInformacoesDetails>
                    <ContainerShiny>
                        <img src={poke.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny} />
                        <img src={poke.data.sprites.versions["generation-v"]["black-white"].animated.back_shiny} />
                    </ContainerShiny>
                    <PesoEAlturaContainer>
                        <h2><strong>Informações Básicas</strong></h2>
                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                    <Tr>
                                        <Th>Altura</Th>
                                        <Th>Metros(m)</Th>
                                        <Th isNumeric>{alturaEmMetros}</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>Peso</Th>
                                        <Th>Kilograma(kg)</Th>
                                        <Th isNumeric>{pesoEmKg}</Th>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </PesoEAlturaContainer>
                    <BasicInfoEMoves>
                        <InformacoesPokemon>
                            <PokemonId>#{id.toString().length === 1 ? `0${id}` : `${id}`}</PokemonId>
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
                        <AtaquesEspeciais>
                            <h2><strong>Ataques Especiais</strong></h2>
                            <div>
                                {poke.data.moves.map((pokemon, id) => {
                                    return id > 7 && id < 30 && <p key={id}>{pokemon.move.name[0].toUpperCase() + pokemon.move.name.substring(1)}</p>
                                })}
                            </div>
                        </AtaquesEspeciais>
                    </BasicInfoEMoves>
                </ContainerInformacoesDetails>
                <PokePicDetails src={poke.data.sprites.other.dream_world.front_default} />
                <PokeballDetails src={PokebalImage} alt="pokeball" />
            </PokemonDetalhesCard>
        }
    }
    return (
        renderizaTela()
    )
}
export default PokemonCard