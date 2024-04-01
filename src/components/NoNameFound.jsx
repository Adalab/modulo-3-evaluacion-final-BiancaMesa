import rickBadLook from "../images/rick_bad_look.png";
import PropTypes from "prop-types";
import "../scss/components/NoNameFound.scss";

function NoNameFound({ message }) {
  return (
    <div className="noNameFoundContainer">
      {message && <p className="noNameFoundContainer__message1">{message}</p>}
      {message && (
        <p className="noNameFoundContainer__message2">
          Give it another try!
        </p>
      )}
      {message && (
        <img
          className="noNameFoundContainer__gif"
          src={rickBadLook}
          alt="rickBadLook"
        />
      )}
    </div>
  );
}

NoNameFound.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoNameFound;
