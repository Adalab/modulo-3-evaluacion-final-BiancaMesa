

function FilterByName({onChangeName={onChangeName}}) {

    const handleChange = (event) => {
        onChangeName(event.target.value);
    };

  return (
    <div>
        <label htmlFor="">Filter by characters</label>
        <input type="text" placeholder="Character's name..." onChange={handleChange}/>
    </div>
  );
}

export default FilterByName;