import "../scss/components/NoNameFound.scss";

function NoNameFound({message}) {
  return (
    <div className="noNameFoundContainer">
      {message && <p className="noNameFoundContainer__message">{message}</p>}
      {message && 
        <p className="noNameFoundContainer__message2">Try again  
          <i className="wink fa-solid fa-face-smile-wink"></i>
        </p>
      }
      {message && <img className="noNameFoundContainer__gif" src="./src/images/gif2.gif" alt="gif-IThoughtItWasCool" /> }
    </div>
  );
}

export default NoNameFound;