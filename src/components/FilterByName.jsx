//import "../scss/components/Filters.scss";

function FilterByName({onChangeName, valueName}) {

    const handleChange = (event) => {
          onChangeName(event.target.value);
    };

    //Al hacer click en la tecla Enter, evita que se refresque la página (comportamiento predeterminado del navegador)
    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
          event.preventDefault(); 
        }
    };

  return (
    <fieldset className="filter__byName">
        <label className="filter__byName--title" htmlFor="name">Name</label>
        <input 
          className="filter__byName--input" 
          type="text"  
          id="name" 
          placeholder="Search character..." 
          onChange={handleChange} 
          onKeyUp={handleKeyPress}
          value={valueName}
        />
        {/* <img className="filter__byName--gif" src="./src/images/rick_and_morty2.jpg" alt="rick" /> */}
    </fieldset>
  );
}

export default FilterByName;