import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../scss/components/Filters.scss"

function Filters({onChangeName, onChangeSpecies, onChangeStatus}) {
  return (
    <form className="filter">
        <FilterByName onChangeName={onChangeName}/>
        <FilterBySpecies onChangeSpecies={onChangeSpecies}/>
        <FilterByStatus onChangeStatus={onChangeStatus}/>
    </form>
  );
}

export default Filters;