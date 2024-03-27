

function FilterByName({onChangeName={onChangeName}}) {

    const handleChange = (event) => {
        onChangeName(event.target.value);
    };

  return (
    <div className="filter__byName">
        {/* <label htmlFor="">Filter by character</label> */}
        <input className="filter__byName--input" type="text" placeholder="Search character..." onChange={handleChange}/>
        {/* <img className="filter__byName--gif" src="./src/images/rick_and_morty2.jpg" alt="rick" /> */}
    </div>
  );
}

export default FilterByName;