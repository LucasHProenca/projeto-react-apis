import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonList } from "../../Router/Coordinator";
import { goToPokedex } from "../../Router/Coordinator";
import Logo from "./midia/Logo.png"
import { HeaderContainer, Arrow } from "./headerStyle";



const Header = () => {
    const navigate = useNavigate();

    let parametros = useLocation()
console.log(parametros.pathname)
    const renderizaTela = () => {
        switch (parametros.pathname) {
            case "/":
                return <HeaderContainer>
                    <img src={Logo} alt="logo" />
                    <button onClick={() => {
                        goToPokedex(navigate)
                        }}>
                        Pokedex
                    </button>
                </HeaderContainer>
                case "/pokedex/":
                    return<HeaderContainer>
                    <div>
                        <Arrow>‹</Arrow>
                        <span onClick={() => {
                             goToPokemonList(navigate)
                        }}>Todos os Pokemons</span>
                    </div>
                    <img src={Logo} alt="logo" />
                </HeaderContainer>
                case "/pokemon-detail/bulbasaur":
                    return<HeaderContainer>
                    <div>
                        <Arrow>‹</Arrow>
                        <span onClick={() => {
                             goToPokemonList(navigate)
                        }}>Todos os Pokemons</span>
                    </div>
                    <img src={Logo} alt="logo" />
                    <button>
                        Excluir da Pokedex
                    </button>
                </HeaderContainer>

        }
    }
    return (
        renderizaTela()
    )
}

export default Header