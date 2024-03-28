//import "../scss/components/Filters.scss";

function FilterByName({onChangeName}) {

    const handleChange = (event) => {
        onChangeName(event.target.value);
    };

  return (
    <fieldset className="filter__byName">
        <label className="filter__byName--title" htmlFor="name">Name</label>
        <input className="filter__byName--input" type="text"  id="name" placeholder="Search character..." onChange={handleChange}/>
        {/* <img className="filter__byName--gif" src="./src/images/rick_and_morty2.jpg" alt="rick" /> */}
    </fieldset>
  );
}

export default FilterByName;