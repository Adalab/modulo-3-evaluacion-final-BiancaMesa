//import "../scss/components/Filters.scss";
import PropTypes from "prop-types";

function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };

  //Al hacer click en la tecla Enter, evita que se refresque la página (comportamiento predeterminado del navegador)
  //Evento onKeyDown: al presionar una tecla se ejecuta la función manejadora handleKeyPress
  //En esta función vamos a especificar que de todas las teclas que podemos presionar, queremos la de Enter
  //Y el código que queremos ejecutar es un event.preventDefault() porque lo que queremos es que se evite el resfrescar la página que lo tienen como automático los inputs
  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  return (
    <fieldset className="filter__byName">
      <label className="filter__byName--title" htmlFor="name">
        Name
      </label>
      <input
        className="filter__byName--input"
        type="text"
        id="name"
        placeholder="Search character..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={valueName}
      />
      {/* <img className="filter__byName--gif" src="./src/images/rick_and_morty2.jpg" alt="rick" /> */}
    </fieldset>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default FilterByName;
