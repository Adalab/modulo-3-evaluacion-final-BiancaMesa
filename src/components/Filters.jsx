import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../scss/components/Filters.scss"

function Filters({onChangeName, onChangeSpecies, onChangeStatus, onDeleteFilters, valueName, valueStatus, valueSpecies}) {

  return (
    <section className="filterSection">
      <form className="filter">
        <FilterByName onChangeName={onChangeName} valueName={valueName}/>
        <FilterBySpecies onChangeSpecies={onChangeSpecies} valueSpecies={valueSpecies}/>
        <FilterByStatus onChangeStatus={onChangeStatus} valueStatus={valueStatus}/>
      </form>
      <button className="deleteFilters" onClick={onDeleteFilters}>Delete Filters <i className="fa-solid fa-trash-can"></i> </button>
    </section>
  );
}

export default Filters;