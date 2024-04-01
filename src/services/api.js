

//función asíncrona que hace la petición al servidor 
const callToApi = () => {
    return fetch ("https://rickandmortyapi.com/api/character")
        .then ((response) => response.json())
        .then ((data) => {
            //nos creamos un array de objetos que contenga sólo la información que necesitamos de la API 
            const parsedCharacters = data.results.map(character => {
                return {
                    image: character.image,
                    name: character.name,
                    species: character.species,
                    planet: character.origin.name, 
                    episodesNumber: character.episode.length, 
                    status: character.status,
                    id: character.id,
                };
            });
            
            return parsedCharacters;
        });
};

export default callToApi; 