
function FilterByStatus({onChangeStatus, valueStatus}) {

  const handleChange = (event) => {
    onChangeStatus(event.target.value); 
  };

  return (
    <fieldset className="filter__byStatus">
      <legend className="filter__byStatus--title">Status</legend>

      <div className="filter__byStatus--alive">
        <label htmlFor="alive">Alive</label>
        <input type="checkbox" id="alive" value="Alive" checked={valueStatus === "Alive"}  onChange={handleChange}/>
      </div>
      
      <div className="filter__byStatus--dead">
        <label htmlFor="dead">Dead</label>
        <input type="checkbox" id="dead" value="Dead" checked={valueStatus === "Dead"} onChange={handleChange}/>
      </div>

      <div className="filter__byStatus--unknown">
        <label className="unknownTitle" htmlFor="unknown">Unknown</label>
        <input className="unknownInput" type="checkbox" id="unknown" value="unknown" checked={valueStatus === "unknown"} onChange={handleChange}/>
      </div>
    </fieldset>
  );
}

export default FilterByStatus;
