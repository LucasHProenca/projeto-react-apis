import styled from "styled-components";

export const PokemonDetailsPageEstilizacao = styled.main`
background-color: #5E5E5E;
min-height: 130vh;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
margin-top:12vh;
`

export const Detalhes = styled.p`
position: absolute;
width: 42rem;
height: 7.2rem;
left: 4rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 4.8rem;
line-height: 7.2rem;
color: #FFFFFF;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 2.5rem;
margin-left: 5vw;
}
`