

function FilterByName({onChangeName={onChangeName}}) {

    const handleChange = (event) => {
        onChangeName(event.target.value);
    };

  return (
    <div>
        {/* <label htmlFor="">Filter by character</label> */}
        <input className="form__nameInput" type="text" placeholder="Search character..." onChange={handleChange}/>
    </div>
  );
}

export default FilterByName;