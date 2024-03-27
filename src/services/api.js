//componente para hacer la petición al servidor. El nombre de la carpeta no empieza por mayúscula porque no estamos creando un componente sino una petición normal

//función asíncrona que hace la petición al servidor 
const callToApi = () => {
    return fetch ("https://rickandmortyapi.com/api/character")
        .then ((response) => response.json())
        .then ((data) => {
            //nos creamos un array de objetos que contenga sólo la información que necesitamos de la API 
            //map va a recorrer cada elemento del array de la API, que en este caso cada elemento es un objeto, y nos va a devolver un objeto nuevo con la información de la API que nosotras necesitamos
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

//como esta función la queremos usar fuera, la vamos a exportar 
export default callToApi; 