import styled from "styled-components";


export const PokemonCardContainer = styled.div`
 padding: 1.6rem;
   width: 28vw;
   height: 22vh;
   background-color: ${({ color }) => color};
   border-radius: 1.2rem;
   display: flex;
   position: relative;
   margin: 3rem;
   color: #ffffff;

   @media screen and (min-device-width : 1440px) and (max-device-width: 1570px) {
    height: 28vh;
}
   
@media screen and (min-device-width : 1201px) and (max-device-width : 1440px) {
width: 35vw;
height: 28vh;
margin: 3rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
width: 43vw;
height: 28vh;
margin: 3rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
width: 40vw;
height: 28vh;
margin: 2rem;
}

@media screen and (min-device-width : 701px) and (max-device-width : 800px) {
width: 43vw;
height: 28vh;
margin: 2rem;
}

@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
width: 90vw;
height: 30vh;
margin: 3rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 90vw;
height: 25vh;
margin: 5vw;
}

`
export const InformacoesDoPokemon = styled.div`
display:flex;
flex-direction:column;
`

export const PokemonId = styled.p`
  height: 2.5rem;
  font-size: 2rem;
  text-align: left;
  font-weight: 560;
  margin: 1rem 0 0 1rem;
  font-family: Inter;


@media screen and (min-device-width : 701px) and (max-device-width : 1570px) {
height:1.9rem;
font-size: 1.7rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
height:1.5rem;
font-size:1.5rem;
}

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

  @media screen and (min-device-width : 1441px) and (max-device-width : 1570px) {
    margin: 0 0 0.8rem 1rem;
}

@media screen and (min-device-width : 1201px) and (max-device-width : 1440px) {
margin: 0.5rem 0 0.8rem 1rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
  margin: 1rem 0 0.8rem 1rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
margin: 0.5rem 0 0.8rem 1rem;
}

@media screen and (min-device-width : 701px) and (max-device-width : 800px) {
margin: 1rem 0 0.8rem 1rem;
}

@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
margin: 1.3rem 0 0.8rem 1rem;
}
`
export const PokemonName = styled.h1`
font-size: 2.5rem;
  text-align: left;
  margin-bottom: 1rem;
  font-size: 'Inter';
  font-weight: 800;
  line-height: 3.4rem;
  margin-left: 1rem;
  font-family: Inter;
  cursor: pointer;

@media screen and (min-device-width : 701px) and (max-device-width : 1570px) {
font-size: 2rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 1.6rem;
}
`

export const PokemonType = styled.img`
  height: 3rem;
  margin-right: 0.8rem;
  width:100%;

  @media screen and (min-device-width : 1441px) and (max-device-width: 1570px) {
    height:2.5rem; 
}

@media screen and (min-device-width : 1201px) and (max-device-width : 1440px) {
height:2.9rem;
width:70%;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
height:2.3rem;
width:70%;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
height:2.2rem;
width: 70%;
}

@media screen and (min-device-width : 701px) and (max-device-width : 800px) {
height:1.8rem;
width: 70%;
}
@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
height: 2.5rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
height: 2.1rem;
width: 80%;
}
`

export const TypesContainer = styled.div`
margin-bottom: 5.2rem;
  margin-left: 0.8rem;
  width:10rem;
  display:flex;
  flex-direction:row;

`

export const Pokeball = styled.img`
 position: absolute;
  top: 0;
  right: 0;

@media screen and (min-device-width : 701px) and (max-device-width : 1200px) {
width: 18rem;
height: 18rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 15rem;
height: 15rem;
}
`

export const Button = styled.button`
font-family: 'Poppins';
  font-size: 1.6rem;
  padding: 0.4rem 1rem;
  width: 15rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  position: absolute;
  bottom: 1.5rem;
  right: 3.5rem;
  color: #000;
  font-weight: 400;
  background-color:white ;
  z-index: 1;
  
@media screen and (min-device-width : 1441px) and (max-device-width: 1570px) {
bottom: 2rem
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
width: 10rem;
bottom: 1.5rem;
right: 3rem;
}

@media screen and (min-device-width : 701px) and (max-device-width : 900px) {
width:10rem;
bottom: 2rem;
right: 3rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 10rem;
bottom: 1rem;
right: 2rem;
}
  
  `
export const Pokemon = styled.img`
width: 19.3rem;
height: 19.3rem;
position: absolute;
top: -6rem;
right: 0;
z-index: 2;

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
width: 13rem;
height: 13rem;
top: -4rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
width: 13rem;
height: 13rem;
top: -4rem;
}

@media screen and (min-device-width : 701px) and (max-device-width : 800px) {
width: 13rem;
height: 13rem;
top: -4rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 11rem;
height: 11rem;
top: -3rem;
}
`

export const PokemonDetalhesCard = styled.div`
width: 90%;
height: 80vh;
padding: 1.6rem;
background-color: ${({ color }) => color};
border-radius: 1.2rem;
display: flex;
position: relative;
margin: 5rem;
color: #ffffff;
top: 10rem;

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
height: 105vh;
width: 90vw;
margin: 0;
margin-left: 5vw;
padding: 1.6rem;
color: #ffffff
}

@media screen and (min-device-width : 481px) and (max-device-width : 900px) {
height: 85vh;
width: 90vw;
margin: 0;
margin-left: 5vw;
padding: 1.6rem;
color: #ffffff
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 90vw;
height: 110vh;
margin: 0;
margin-left:5vw;
padding: 1.6rem;
color: #ffffff;
}

`

export const ContainerFrontEBack = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 20%;
gap: 2rem;

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
flex-direction:row;
width: 100%;
height: 20%;
margin-top: 10rem;
position: absolute;
top: 65%;
left: 0;
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
flex-direction:row;
width: 100%;
height: 15%;
margin-top: 10rem;
position: absolute;
top: 65%;
left: 0;
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
flex-direction:row;
width: 100%;
height: 15%;
margin-top: 10rem;
position: absolute;
top: 68%;
left: 0;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
flex-direction: row;
width: 100%;
height:15%;
margin-top: 10rem;
position: absolute;
padding-top: 5%;
top: 68%;
left: 0;
}
`

export const ImagemFrontEBack = styled.div`
height:100%;
width:100%;
background-color: white;
color: black;
border-radius: 0.8rem;
display: flex;
justify-content: center;
align-items: center;

img{
  height: 100%;
  width: 100%;
}

`

export const ContainerInformacoesDetails = styled.div`
display:flex;
flex-direction:row;
width:100%;
height: 100%;
gap: 2rem;

@media screen and (min-device-width : 320px) and (max-device-width : 1200px) {
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
}
`

export const Moves = styled.div`
height:90%;
width:70%;
background-color: white;
display: flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
color: black;
border-radius: 0.8rem;
gap: 1rem;
padding: 1rem;
font-family: Inter;

h2{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-start;
  font-size: 3rem;
  margin-left: 1rem;
}

div{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}

p{
  display: flex;
  background-color: #ECECEC
  flex-direction: column;
  align-items:center;
  justify-content:center;
  border: 0.1rem dashed rgba(0,0,0, 0.14);
  border-radius: 0.8rem;
  margin: 1rem;
  font-size: 2rem;
  font-family: "Montserrat"
  line-height: 1.7rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
height: 20%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.6rem;
  }
}
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
height: 25%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.6rem;
  }
}
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
height: 30%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.6rem;
  }
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100%;
height: 30%;

h2{
  font-size: 1.6rem;
}

p{
  font-size:1.2rem;
}
}
`

export const TabelaDeInfo = styled.article`
width:25%;
background-color: white;
border-radius: 0.8rem;
display:flex;
flex-direction:column;
align-items:left;
padding-left: 2rem;
`

export const BaseStats = styled.article`
width:25%;
background-color: white;
border-radius: 0.8rem;
display:flex;
flex-direction:column;
align-items:left;
padding-left: 2rem;
font-family:Inter;

h2{
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  color:black;
  font-size: 3rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
width: 100%;
height: 35%;
margin-top: 3%;
position: absolute;
top:35%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
width: 100%;
height: 35%;
margin-top: 3%;
position: absolute;
top:38%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
width: 100%;
height: 35%;
margin-top: 3%;
position: absolute;
top:43%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100%;
height: 35%;
margin-top: 5%;
position: absolute;
top:43%;
left:0;

h2{
  font-size: 1.6rem;
}
}

`
export const BasicInfoEMoves = styled.div`
display: flex;
flex-direction: column;
width: 40%;
height:100%;

@media screen and (min-device-width : 701px) and (max-device-width : 1200px) {
width: 100%;
height:87.5%;
position: absolute;
top:0;
left:0;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 100%;
height:85%;
position: absolute;
top:0;
left:0;
}
`

export const InformacoesPokemon = styled.div`
width: 40%;
height:20%;
display: flex;
flex-direction: column;

`

export const PokeballDetails = styled.img`
position: absolute;
top: 0;
right:3.5rem;
width: 60%;
height: 100%;

@media screen and (min-device-width : 801px) and (max-device-width : 1200px) {
right:0;
width: 14rem;
height: 14rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 800px) {
  right:0;
width: 14rem;
height: 13rem;
}
`

export const ContainerDeTipos = styled.div`
display: flex;
flex-direction:row;
margin-left: 0.8rem;
width: 50%;
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
width: 90%;

div{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 0.1rem solid rgba(0,0,0, 0.14);
}

h1{
  color:black;
  font-size: 1.3rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 1200px) {
width: 100%;
height: 100%;
}
`

export const NomeDoStatus = styled.p`
display:flex;
flex-direction:row;
justify-content: flex-start;
color:black;
width: 100%;
font-size: 1.2rem;

`

export const ValorNumericoStatus = styled.p`
margin-left:1rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color:black;
font-size: 1.6rem;
`

export const BarrasDePoder = styled.div`
width: 100%;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:1rem;
`

export const PokePicDetails = styled.img`
width: 19.3rem;
height: 19.3rem;
position: absolute;
top: -6rem;
right: 0;
z-index: 2;

@media screen and (min-device-width : 481px) and (max-device-width : 1200px) {
width: 11rem;
height: 11rem;
top: -4rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 11rem;
height: 11rem;
top: -3rem;
}
`

export const PesoEAlturaContainer = styled.article`
width:25%;
background-color: white;
border-radius: 0.8rem;
display:flex;
flex-direction:column;
justify-content: start;
align-items:left;
padding-left: 2rem;
font-family: Inter;

h2{
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  color:black;
  font-size: 2.5rem;
  padding-bottom: 2rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
width: 100%;
height: 35%;
margin-top: 3%;
position: absolute;
justify-content: flex-start;
top:35%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 701px) and (max-device-width : 900px) {
width: 100%;
height: 40%;
margin-top: 3%;
position: absolute;
justify-content: flex-start;
top:35%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
width: 100%;
height: 40%;
margin-top: 3%;
position: absolute;
top:35%;
left:0;

h2{
  font-size: 1.6rem;
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100%;
height: 43%;
margin-top: 5%;
position: absolute;
top:35%;
left:0;

h2{
  font-size: 1.6rem;
}
}
`

export const InformacoesBasicas = styled.div`
height:50%;
width:60%;
background-color: white;
display: flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
color: black;
border-radius: 0.8rem;
gap: 1rem;
padding: 1rem;
font-family: Inter;

h2{
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:flex-start;
  font-size: 2.5rem;
  margin-left: 1rem;
  padding-bottom: 1rem;
}

div{
  width: 100%;
  
}

@media screen and (min-device-width : 320px) and (max-device-width : 1200px) {
height: 20%;
width: 100%;

  h2{
    font-size: 2rem;
  
}
}

`

export const AtaquesEspeciais = styled.div`
height:90%;
width:100%;
background-color: white;
display: flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
color: black;
border-radius: 0.8rem;
gap: 1rem;
padding: 1rem;
font-family: Inter;

h2{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-start;
  font-size: 2.5rem;
  margin-left: 1rem;
}

div{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}

p{
  display: flex;
  background-color: #ECECEC
  flex-direction: column;
  align-items:center;
  justify-content:center;
  border: 0.1rem dashed rgba(0,0,0, 0.14);
  border-radius: 0.8rem;
  margin: 1rem;
  font-size: 1.6rem;
  font-family: "Montserrat"
  line-height: 1.7rem;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
height: 40%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.8rem;
  }
}
}

@media screen and (min-device-width : 701px) and (max-device-width : 900px) {
height: 40%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.6rem;
  }
}
}

@media screen and (min-device-width : 481px) and (max-device-width : 700px) {
height: 50%;
width: 100%;

{
  h2{
    font-size: 2rem;
  }

  p{
    font-size: 1.3rem;
  }
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100%;
height: 50%;

h2{
  font-size: 1.6rem;
}

p{
  font-size:1.2rem;
}
}
`

export const ContainerShiny = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 20%;
gap: 2rem;

img{
  height: 50%;
}

@media screen and (min-device-width : 901px) and (max-device-width : 1200px) {
flex-direction:row;
justify-content: center;
width: 100%;
height: 20%;
margin-top: 10rem;
position: absolute;
top: 65%;
left: 0;

img{
  height: 100%;
}
}

@media screen and (min-device-width : 801px) and (max-device-width : 900px) {
flex-direction:row;
justify-content: center;
width: 100%;
height: 15%;
margin-top: 10rem;
position: absolute;
top: 65%;
left: 0;

img{
  height: 100%;
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 800px) {
flex-direction: row;
justify-content: center;
width: 100%;
height:15%;
margin-top: 10rem;
position: absolute;
padding-top: 5%;
top: 68%;
left: 0;

img{
  height: 100%;
}
}

`






