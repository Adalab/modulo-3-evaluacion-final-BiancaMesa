import {useState, useEffect} from "react";
import callToApi from "../services/api"; //nos importamos la función que contiene la petición al servidor y el nuevo array de objetos de su fichero
import CharactersList from './CharactersList';
import Filters from "./Filters"; 
import '../scss/App.scss'; 

function App() {

  //variables de estado
  const [characters, setCharacters] = useState([]); //variable de estado que recoge la información de la API
  const [filterName, setFilterName] = useState(""); 


  //usamos useEffect para llamar a la función que tiene la información de la API para que no se cree un bucle infinito 
  useEffect(() => {
    //la función callToApi devuelve una promesa
    //then recibe como parámetro el array de objetos que hemos creado nuevo con la información de la API
    callToApi().then((charactersData) => {
      //guardamos este array de objetos que ha recogido la petición de la API en una variable de estado para poder usar esos datos ahora en App
      setCharacters(charactersData);
      //console.log(charactersData); 
    });
  }, []); //se ejecuta una sóla vez lo que hay en la función, cuando se carga la página

  //FILTERS 
  //Filter by name
  const handleChangeName = (value) => {
    setFilterName(value);
  }; 

  //variable que es un array de objetos que recoge las información después de haber aplicado todos los filtros, por ahora, el filtro por nombre sólo 
  const filteredCharacters = characters
    .filter((character) => {
      // console.log(character.name.includes(filterName));
      return character.name.toLowerCase().includes(filterName.toLocaleLowerCase());
  });

  return (
    <>
      <header className='header'>
        <img className='header__image' src="./src/images/Rick_and_Morty.png" alt="rick-and-morty-header" />
      </header>

      <main>
        <Filters onChangeName={handleChangeName} />
        <CharactersList characters={filteredCharacters}/>
      </main>
    </>
  );
}

export default App;
