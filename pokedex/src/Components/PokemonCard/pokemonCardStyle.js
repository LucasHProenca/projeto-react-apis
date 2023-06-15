import styled from "styled-components";


export const PokemonCardContainer = styled.div`
 padding: 1.6rem;
   width: 44rem;
   height: 25vh;
   background-color: ${({color}) => color};
   border-radius: 1.2rem;
   display: flex;
   position: relative;
   margin: 5rem;
   color: #ffffff;
   top: 10rem;
`



export const PokemonId = styled.p`
width: 3rem;
  height: 1.9rem;
  font-size: 1.7rem;
  text-align: left;
  font-weight: 560;
  margin: 1rem 0 0 1rem;
`

export const PokemonDetail = styled.p`
 width: 7.4rem;
  height: 2.4rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-decoration-line: underline;
  margin: 0 0 0.8rem 1rem;
  cursor: pointer;
`
export const PokemonName = styled.h1`
font-size: 3.2rem;
  text-align: left;
  margin-bottom: 1rem;
  font-size: 'Inter';
  font-weight: 800;
  line-height: 3.4rem;
  margin-left: 1rem;
`

export const PokemonType = styled.img`
max-width: 10rem;
  height: 3.2rem;
  margin-right: 0.8rem;
`

export const TypesContainer = styled.div`
margin-bottom: 5.2rem;
  margin-left: 0.8rem;
  display:flex;
  flex-direction:row;
`

export const Pokeball = styled.img`
 position: absolute;
  top: 0;
  right: 0;
`

export const Button = styled.button`
font-family: 'Poppins';
  font-size: 1.6rem;
  padding: 0.4rem 1rem;
  width: 15rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  position: absolute;
  bottom: 2.5rem;
  right: 3.5rem;
  color: #000;
  font-weight: 400;
  background-color:white ;
  z-index: 1;
  `


export const Pokemon = styled.img`
width: 19.3rem;
height: 19.3rem;
position: absolute;
top: -6rem;
right: 0;
z-index: 2;
`

export const PokemonDetalhesCard = styled.div`
width: 90%;
height: 80vh;
padding: 1.6rem;
background-color: ${({color}) => color};
   border-radius: 1.2rem;
   display: flex;
   position: relative;
   margin: 5rem;
   color: #ffffff;
   top: 10rem;

`

export const QuadrosBrancos = styled.article`
display: flex;
flex-direction: column;
height: 100%;
width: 20%;
gap: 2rem;
`

export const QuadrosAEsquerda = styled.article`
height:100%;
width:100%;
background-color: white;
color: black;
border-radius: 0.8rem;

img{
  height: 100%;
  width: 100%;
}
`

export const QuadroGrandeBranco = styled.article`
display:flex;
flex-direction:row;
width:100%;
height: 100%;
gap: 2rem;
`

export const QuadroADireita = styled.article`
height:70%;
width:70%;
background-color: white;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
color: black;
border-radius: 0.8rem;

h2{
  display: flex;
  justify-content:center;
  align-items:flex-start;
}

p{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  border: 0.2rem dashed rbga(0,0,0, 0.2);
  border-radius: 0.8rem;
}
`

export const BaseStats = styled.article`
height:100%;
width:25%;
background-color: white;
border-radius: 0.8rem;
display:flex;
flex-direction:column;
align-items:left;
padding-left: 2rem;

h2{
  color:black;
}
`
export const UltimoQuadro = styled.article`
display: flex;
flex-direction: column;
width: 40%;
height:100%;
`

export const InformacoesPokemon = styled.div`
width: 40%;
height:30%;
display: flex;
flex-direction: column;
`

export const PokeballDetails = styled.img`
position: absolute;
  top: 0;
  right:0;
  width:60%;
  height: 90vh;
`

export const ContainerDeTipos = styled.div`
display: flex;
flex-direction:row;
margin-left: 0.8rem;
`

export const PokemonNosDetalhes = styled.img`
width: 20%;
height: 20%;
position: absolute;
top: -6rem;
right: 0;
z-index: 2;
`

export const StatusDoPokemon = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:flex-start;
height: 50%;

div{
  display: flex;
  flex-direction: row;
  width: 90%;
}
`

export const NomeDoStatus = styled.p`
display:flex;
justify-content: end;
color:black;
width: 50%;
`

export const ValorNumericoStatus = styled.p`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:black;
`

export const BarrasDePoder = styled.div`
width: 100%;
height: 1.3rem;
`


