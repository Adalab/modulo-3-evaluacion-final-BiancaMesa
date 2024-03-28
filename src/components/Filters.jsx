import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../scss/components/Filters.scss"

function Filters({onChangeName, onChangeSpecies}) {
  return (
    <form className="filter">
        <FilterByName onChangeName={onChangeName}/>
        <FilterBySpecies onChangeSpecies={onChangeSpecies}/>
    </form>
  );
}

export default Filters;