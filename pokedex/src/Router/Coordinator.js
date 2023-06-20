export const goToPokemonList = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedex = (navigate) => {
    navigate("/pokedex/");
  };

  export const goToDetails = (navigate, name) => {
    navigate(`/pokemon-detail/${name}`)
  }

  export const goToProfilePage = (navigate, name) => {
    navigate(`/pokemon-profile/${name}`)
  }