import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import callToApi from "../services/api"; //nos importamos la función que contiene la petición al servidor y el nuevo array de objetos de su fichero
import localStorage from "../services/localStorage";
import Header from "./Header";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import Footer from "./Footer";
import HeaderCharacterDetails from "./HeaderCharacterDetails";
import CharacterDetails from "./CharacterDetails";
import "../scss/App.scss";
import FooterCharacterDetails from "./FooterCharacterDetails";
import NoPageFound from "./NoPageFound";

function App() {
  //VARIABLES DE ESTADO
  //LOCAL STORAGE: obtener datos guardados
  const localStorageName = localStorage.get("filterName", "");
  const localStorageSpecies = localStorage.get("filterSpecies", "");
  const localStorageStatus = localStorage.get("filterStatus", "");
  const localStorageCharacters = localStorage.get("characters", []);

  //Inicialimos nuestras variables de estado con las variables que han recogido la información de LS
  const [characters, setCharacters] = useState(localStorageCharacters);
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterSpecies, setFilterSpecies] = useState(localStorageSpecies); 
  const [filterStatus, setFilterStatus] = useState(localStorageStatus);
  //IS LOADING
  const [isLoading, setIsLoading] = useState(false); //DELETE ???
  //const [characterSpecies, setCharacterSpecies] = useState("");
  //const [hasCLickedDelete, setHasClickedDelete] = useState(false);
  //const [isVisible, setIsVisible] = useState(false);

  //API
  useEffect(() => {
    setIsLoading(true);
    callToApi().then((charactersData) => {
      //Creamos un array que contenga lo mismo que charactersData pero ordenado alfabéticamente por nombre.
      
      const sortedCharacters = [...charactersData].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return 1;
        }

        if (nameA < nameB) {
          return -1;
        }

        if (nameA === nameB) {
          return 0;
        }
      });
      setIsLoading(false); //poner justo despues de que el fetch responda
      
      setCharacters(sortedCharacters);

    });
  }, []); 

  //LOCAL STORAGE: guardar datos
  useEffect(() => {
    localStorage.set("filterName", filterName);
    localStorage.set("filterSpecies", filterSpecies);
    localStorage.set("filterStatus", filterStatus);
    localStorage.set("characters", characters);
  }, [filterName, filterSpecies, filterStatus, characters]);

  //FILTERS
  //Filter by name
  const handleChangeName = (value) => {
    setFilterName(value);
  };

  //Filter by species
  const handleChangeSpecies = (value) => {
    setFilterSpecies(value);
  };

  //Filter by status
  const handleChangeStatus = (value) => {
    setFilterStatus(value);
  };

  //variable que es un array de objetos que recoge las información después de haber aplicado todos los filtros, por ahora, el filtro por nombre sólo
  let filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterName.toLocaleLowerCase());
    })
    .filter((character) => {
      return filterSpecies !== "" ? character.species === filterSpecies : true;
    })
    .filter((character) => {
      return filterStatus !== "" ? character.status === filterStatus : true;
    });

  //si lo que escribe el usuario no se corresponde con ningún personaje. Verificamos primero si el array de personajes filtrados está vacío y el filtro (input) no lo está
  const noNameFoundMessage =
    filteredCharacters.length === 0 && filterName !== ""
      ? `Sorry, there are no matches for "${filterName}"`
      : "";

  //RUTA DINÁMICA:
  //Para obtener el id de la ruta
  //1. Usamos el hook useLocation para obtener el id de la ruta actual, la URL
  const { pathname } = useLocation();
  //2. Creamos una constante (es un objeto) en la que vamos a usar matchPath para comprobar si la ruta actual (pathname) coincide con la ruta dinámica deseada (/card/cardId). Si coincide, nos devolverá un objeto con información, entre ella el número de id que buscamos
  const cardDetailRoute = matchPath("/card/:cardId", pathname);
  //3. El id que buscamos está en el objeto en cardDetailRoute.params.cardId. Creamos una constante en la que recogamos ese valor siempre y cuando se haya encontrado una ruta para ese id, de lo contrario en la constante se almacenará un string vacío.
  //Le hacemos un parseInt al id que nos viene del navegador porque el navegador nos lo da como string y nosotras queremos el dato en número
  const cardId =
    cardDetailRoute !== null ? parseInt(cardDetailRoute.params.cardId) : 0;

  //Buscamos en la variable de estado characters (array de objetos con la info de la API) el character que coincida con el id de la ruta. Find nos va a devolver el primer elemento que cumpla con la condición. Esa información se la vamos a pasar por props al componente que queremos pintar cuando el usuario haga click en un character
  const characterDetailData = characters.find((character) => {
    return character.id === cardId;
  });

  //DELETE FILTERS
  const handleDeleteFilters = () => {
    setFilterName("");
    setFilterSpecies("");
    setFilterStatus("");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Filters
                  onChangeName={handleChangeName}
                  onChangeSpecies={handleChangeSpecies}
                  onChangeStatus={handleChangeStatus}
                  onDeleteFilters={handleDeleteFilters}
                  valueName={filterName}
                  valueStatus={filterStatus}
                  valueSpecies={filterSpecies}
                />

                <CharactersList
                  characters={filteredCharacters}
                  message={noNameFoundMessage}
                  isLoading={isLoading}
                />
              </main>

              <Footer />
            </>
          }
        />

        <Route
          path="/card/:cardId"
          element={
            <>
              <HeaderCharacterDetails />

              <main className="mainCharacterDetails">
                <CharacterDetails
                  character={characterDetailData}
                  cardId={cardId}
                  characters={characters}
                />
              </main>

              <FooterCharacterDetails />
            </>
          }
        />

        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
