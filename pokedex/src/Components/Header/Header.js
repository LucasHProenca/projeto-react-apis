import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonList } from "../../Router/Coordinator";
import { goToPokedex } from "../../Router/Coordinator";
import Logo from "./midia/Logo.png"
import { HeaderContainer, Arrow } from "./headerStyle";
import { useContext } from "react";
import { globalContext } from "../../GlobalState/GlobalStateContext";



const Header = () => {
    const navigate = useNavigate();
    let parametros = useLocation()

    const context = useContext(globalContext)
    const { pokedex, adicionaPokemon, removePokemon, pokemonList } = context

    const nome = parametros.pathname.split("/")[2]

    const verificaPokemon = pokedex.find((pokemon) =>
        pokemon.data.name === nome
    )

    const verificaLista = pokemonList.find((pokemon) =>
        pokemon.data.name === nome
    )

    const result = () => {
        if (verificaPokemon) {
            return <button style={{ backgroundColor: "#FF6262" }} onClick={() => {
                removePokemon(verificaPokemon)
                goToPokedex(navigate)
            }}>
                Excluir da Pokédex
            </button>
        } else if (verificaLista) {
            return <button onClick={() => {
                adicionaPokemon(verificaLista)
                goToPokedex(navigate)
            }}>
                Adicionar na Pokédex
            </button>
        }
    }

    // console.log(parametros.pathname)

    const renderizaTela = () => {
        if (parametros.pathname === "/") {
            return <HeaderContainer>
                <img src={Logo} alt="logo" />
                <button onClick={() => {
                    goToPokedex(navigate)
                }}>
                    Pokédex
                </button>
            </HeaderContainer>
        } else if (parametros.pathname === "/pokedex/") {
            return <HeaderContainer>
                <div>
                    <Arrow>‹</Arrow>
                    <span onClick={() => {
                        goToPokemonList(navigate)
                    }}>Todos os Pokémons</span>
                </div>
                <img src={Logo} alt="logo" />
            </HeaderContainer>
        } else if (parametros.pathname.includes("/pokemon-detail/")) {
            return <HeaderContainer>
                <div>
                    <Arrow>‹</Arrow>
                    <span onClick={() => {
                        goToPokemonList(navigate)
                    }}>Todos os Pokémons</span>
                </div>
                <img src={Logo} alt="logo" />
                {result()}
            </HeaderContainer>
        } else if (parametros.pathname.includes("/pokemon-profile/")) {
            return <HeaderContainer>
                <div>
                    <Arrow>‹</Arrow>
                    <span onClick={() => {
                        goToPokemonList(navigate)
                    }}>Todos os Pokémons</span>
                </div>
                <img src={Logo} alt="logo" />
                {result()}
            </HeaderContainer>
        }
    }
    return (
        renderizaTela()
    )
}

export default Header