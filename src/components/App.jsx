import {useState, useEffect} from "react";
import {Route, Routes, useLocation, matchPath} from "react-router-dom";
import callToApi from "../services/api"; //nos importamos la función que contiene la petición al servidor y el nuevo array de objetos de su fichero
import Header from "./Header";
import CharactersList from './CharactersList';
import Filters from "./Filters"; 
import CharacterDetails from "./CharacterDetails";
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
      return character.name.toLowerCase().includes(filterName.toLocaleLowerCase());
  });

  
  //RUTA DINÁMICA:
  //Para obtener el id de la ruta 
  //1. Usamos el hook useLocation para obtener el id de la ruta actual, la URL
  const {pathname} = useLocation(); 
  //2. Creamos una constante (es un objeto) en la que vamos a usar matchPath para comprobar si la ruta actual (pathname) coincide con la ruta dinámica deseada (/card/cardId). Si coincide, nos devolverá un objeto con información, entre ella el número de id que buscamos
  const cardDetailRoute = matchPath("/card/:cardId", pathname);
  //3. El id que buscamos está en el objeto en cardDetailRoute.params.cardId. Creamos una constante en la que recogamos ese valor siempre y cuando se haya encontrado una ruta para ese id, de lo contrario en la constante se almacenará un string vacío. 
  //Le hacemos un parseInt al id que nos viene del navegador porque el navegador nos lo da como string y nosotras queremos el dato en número
  const cardId = cardDetailRoute !== null ? parseInt(cardDetailRoute.params.cardId) : ''; 

  //Buscamos en la variable de estado characters (array de objetos con la info de la API) el character que coincida con el id de la ruta. Find nos va a devolver el primer elemento que cumpla con la condición. Esa información se la vamos a pasar por props al componente que queremos pintar cuando el usuario haga click en un character
  const characterDetailData = characters.find((character) => {
    return character.id === cardId; 
  }) 

  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route path="/" element={
            <>
            <Filters onChangeName={handleChangeName} />
            <CharactersList characters={filteredCharacters}/>
            </>
          }
          />

          <Route path="/card/:cardId" element={
            <CharacterDetails character={characterDetailData}/>
          } 
          />

        </Routes>

      </main>
    </>
  );
}

export default App;
