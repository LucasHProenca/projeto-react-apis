export const goToPokemonList = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedex = (navigate) => {
    navigate("/pokedex/");
  };

  export const goToDetails = (navigate, id) => {
    navigate(`/pokemon-detail/${id}`)
  }