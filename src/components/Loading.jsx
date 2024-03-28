

function Loading({isLoading}) {

  return (
    <div>
        {isLoading && <h1>The list is loading</h1>}
    </div>
  );
}

export default Loading;