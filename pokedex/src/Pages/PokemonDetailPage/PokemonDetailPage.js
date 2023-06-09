import { useParams } from "react-router-dom";
import React from "react";
import { PokemonDetailsPageEstilizacao, Detalhes } from "./pokemonDetailPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokemonDetailPage = () => {
    
    const pathParams = useParams();
    console.log(pathParams);
    return(
        <PokemonDetailsPageEstilizacao>
      <Detalhes>Detalhes {pathParams.id}</Detalhes>
      <PokemonCard/>
    </PokemonDetailsPageEstilizacao>
    )
}

export default PokemonDetailPage