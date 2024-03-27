import "../scss/components/NoNameFound.scss";

function NoNameFound({message}) {
  return (
    <div className="noNameFoundContainer">
      {message && <p className="noNameFoundContainer__message">{message}</p>}
      {message && <img className="noNameFoundContainer__gif" src="./src/images/gif2.gif" alt="gif-IThoughtItWasCool" /> }
    </div>
  );
}

export default NoNameFound;