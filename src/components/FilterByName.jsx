//import "../scss/components/Filters.scss";
import PropTypes from "prop-types"; 

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

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired
};

export default FilterByName;