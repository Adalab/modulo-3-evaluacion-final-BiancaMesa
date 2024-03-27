import {useState, useEffect} from "react";
import callToApi from "../services/api"; //nos importamos la función que contiene la petición al servidor y el nuevo array de objetos de su fichero
import CharacterList from './CharacterList';
import '../scss/App.scss'; 

function App() {

  //variables de estado
  const [characters, setCharacters] = useState([]); //variable de estado que recoge la información de la API


  //usamos useEffect para llamar a la función que tiene la información de la API para que no se cree un bucle infinito 
  useEffect(() => {
    //la función callToApi devuelve una promesa
    //then recibe como parámetro el array de objetos que hemos creado nuevo con la información de la API
    callToApi().then((charactersData) => {
      //guardamos este array de objetos que ha recogido la petición de la API en una variable de estado para poder usar esos datos ahora en App
      setCharacters(charactersData);
      console.log(charactersData); 
    });
  }, []); //se ejecuta una sóla vez lo que hay en la función, cuando se carga la página

  return (
    <>
      <header className='header'>
        <img className='header__image' src="./src/images/Rick_and_Morty.png" alt="rick-and-morty-header" />
      </header>

      <main>
        <CharacterList />
      </main>
    </>
  );
}

export default App;
