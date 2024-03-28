import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../scss/components/Filters.scss"

function Filters({onChangeName, onChangeSpecies, onChangeStatus, onDeleteFilters}) {
  return (
    <section className="filterSection">
      <form className="filter">
        <FilterByName onChangeName={onChangeName}/>
        <FilterBySpecies onChangeSpecies={onChangeSpecies}/>
        <FilterByStatus onChangeStatus={onChangeStatus}/>
      </form>
      <button className="deleteFilters" onClick={onDeleteFilters}>Delete Filters</button>
    </section>
  );
}

export default Filters;