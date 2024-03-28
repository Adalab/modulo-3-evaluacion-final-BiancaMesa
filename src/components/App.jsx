import {useState, useEffect} from "react";
import {Route, Routes, useLocation, matchPath} from "react-router-dom";
import callToApi from "../services/api"; //nos importamos la función que contiene la petición al servidor y el nuevo array de objetos de su fichero
import Header from "./Header";
import CharactersList from './CharactersList';
import Filters from "./Filters"; 
import HeaderCharacterDetails from "./HeaderCharacterDetails";
import CharacterDetails from "./CharacterDetails";
import '../scss/App.scss'; 


function App() {

  //variables de estado
  const [characters, setCharacters] = useState([]); //variable de estado que recoge la información de la API
  const [filterName, setFilterName] = useState(""); 
  const [filterSpecies, setFilterSpecies] = useState(""); //variable que recoge el valor de la especie seleccionada 


  //usamos useEffect para llamar a la función que tiene la información de la API para que no se cree un bucle infinito 
  useEffect(() => {
    //la función callToApi devuelve una promesa
    //then recibe como parámetro el array de objetos que hemos creado nuevo con la información de la API
    callToApi().then((charactersData) => {
      //Creamos un array que contenga lo mismo que charactersData pero ordenado alfabéticamente por nombre. 
      //1. Hacemos una copia del array de objetos charactersData usando destructuring
      //2. Lo ordenamos usando el método sort, donde a y b van a ser dos elementos del array que el método va a ir comparando. Este método recibe como parámetro una función de comparación que va a determinar el orden de los elementos 
      const sortedCharacters = [...charactersData].sort((a, b) => {
        //Manera simplificada: Comparamos alfabéticamente el nombre del elemento a con el nombre del elemento b 
        //return a.name.localeCompare(b.name);

        //Manera no simplificada: Creamos una constante para los dos nombres que vamos a comparar. 
        //a y b son dos elementos del array (dos objetos), accedemos a su propiedad nombre y lo ponemos en minúscula para evitar problemas
        const nameA = a.name.toLowerCase(); 
        const nameB = b.name.toLowerCase();

        //El método sort realmente lo que ordena son números así que tenemos que asignarle números a cada comparación que realicemos para que sort pueda ordenarlos. 
        //Si el nombre A es mayor que el nombre B alfabéticamente, devuelve 1
        if (nameA > nameB) {
          return 1; 
        }

        //Si el nombre A es inferior al nombre B alfabéticamente, devuelve -1
        if (nameA < nameB) {
          return -1; 
        }

        //Si el nombre A es igual al nombre B alfabéticamente, devuelve 0
        if (nameA === nameB) {
          return 0; 
        }
      });
      //guardamos este array de objetos que ha recogido la petición de la API en una variable de estado para poder usar esos datos ahora en App
      setCharacters(sortedCharacters);
      //console.log(charactersData); 
    });
  }, []); //se ejecuta una sóla vez lo que hay en la función, cuando se carga la página


  //FILTERS 
  //Filter by name
  const handleChangeName = (value) => {
    setFilterName(value);
  }; 

  //Filter by species
  const handleChangeSpecies = (value) => {
    setFilterSpecies(value);
  };

  //variable que es un array de objetos que recoge las información después de haber aplicado todos los filtros, por ahora, el filtro por nombre sólo 
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLocaleLowerCase());
    })
    .filter((character) => {
      //return character.species.includes(filterSpecies);
      return filterSpecies !== "" ? character.species === filterSpecies : true;  
    });


  //si lo que escribe el usuario no se corresponde con ningún personaje. Verificamos primero si el array de personajes filtrados está vacío y el filtro (input) no lo está
  const noNameFoundMessage = filteredCharacters.length === 0 && filterName !== "" ? `Sorry, there are no matches for "${filterName}"` : "";


  
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
        <Routes>

          <Route path="/" element={
            <>
            <Header />
            <main>
              <Filters onChangeName={handleChangeName} onChangeSpecies={handleChangeSpecies} />
              <CharactersList characters={filteredCharacters} message={noNameFoundMessage}/>
            </main>
            </>
          }
          />

          <Route path="/card/:cardId" element={
            <>
              <HeaderCharacterDetails />
              <main className="mainCharacterDetails">
                <CharacterDetails character={characterDetailData} />
              </main>
            </>           
          } 
          />

        </Routes>
    </>
  );
}

export default App;
