import PropTypes from "prop-types";

function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };

  //Evitar que se refresque la página al presionar Enter
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
    </fieldset>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default FilterByName;
