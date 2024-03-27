import FilterByName from "./FilterByName";

function Filters({onChangeName={onChangeName}}) {
  return (
    <form>
        <FilterByName onChangeName={onChangeName}/>
    </form>
  );
}

export default Filters;