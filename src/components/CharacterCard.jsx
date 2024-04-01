import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../scss/components/CharacterCard.scss";

function CharacterCard({ characterData }) {
  // const characterSpecies = characterData.species;
  //characterSpecies(characterData.species);

  return (
    <li className="characterCard">
      <Link className="characterCard__link" to={`/card/${characterData.id}`}>
        <div className="characterCard__link--images">
          <img
            className="frontImage"
            src={characterData.image}
            alt={characterData.name}
          />
          <div className="backgroundImage"></div>
        </div>

        <div className="characterCard__link--info">
          <h4 className="characterName">{characterData.name}</h4>
          <p className="characterSpecies">
            {characterData.species === "Human"
              ? `${characterData.species} 👤`
              : `${characterData.species} 👽`}
          </p>

          <div className="more_info">
            <button className="more_info__btn">More info</button>
          </div>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired,
};

export default CharacterCard;
