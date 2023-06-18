import styled from "styled-components";

export const PokedexPageEstilizacao = styled.main`
background-color: #5E5E5E;
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
margin-top:12vh;
`
export const MeusPokemons = styled.p`
margin-left:7.5rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 4.8rem;
line-height: 7.2rem;
color: #FFFFFF;

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
font-size: 2.5rem;
margin-left: 5vw;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
font-size: 2.5rem;
margin-left: 7.5vw;
}

@media screen and (min-device-width : 701px) and (max-device-width : 800px) {
font-size: 2.5rem;
margin-left: 5vw;
}

@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
font-size: 2.5rem;
margin-left: 5vw;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 2.5rem;
margin-left: 5vw;
}
`
export const ContainerPokemon = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap
`