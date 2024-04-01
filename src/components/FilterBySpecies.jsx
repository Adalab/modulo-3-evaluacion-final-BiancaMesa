import PropTypes from "prop-types";

function FilterBySpecies({ onChangeSpecies, valueSpecies }) {
  const handleChange = (event) => {
    onChangeSpecies(event.target.value);
  };

  return (
    <fieldset className="filter__bySpecies">
      <label className="filter__bySpecies--title" htmlFor="species">
        Species
      </label>
      <select
        className="filter__bySpecies--options"
        name="species"
        id="species"
        value={valueSpecies}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </fieldset>
  );
}

FilterBySpecies.propTypes = {
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default FilterBySpecies;
