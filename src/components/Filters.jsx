import FilterByName from "./FilterByName";
import "../scss/components/Filters.scss"

function Filters({onChangeName={onChangeName}}) {
  return (
    <form className="form">
        <FilterByName onChangeName={onChangeName}/>
    </form>
  );
}

export default Filters;