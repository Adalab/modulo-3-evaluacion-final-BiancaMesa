import "../scss/components/NoNameFound.scss";
import notFoundGif from "../images/gif2.gif";

function NoNameFound({message}) {
  return (
    <div className="noNameFoundContainer">
      {message && <p className="noNameFoundContainer__message">{message}</p>}
      {message && 
        <p className="noNameFoundContainer__message2">
          Give it another try!
          {/* <i className="wink fa-solid fa-face-smile-wink"></i> */}
        </p>
      }
      {message && <img className="noNameFoundContainer__gif" src={notFoundGif} alt="gif-IThoughtItWasCool" /> }
    </div>
  );
}

export default NoNameFound;