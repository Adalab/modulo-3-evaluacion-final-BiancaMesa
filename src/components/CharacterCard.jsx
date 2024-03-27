import {Link} from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard({characterData}) {
  return (
    <li className="characterCard">
        <Link to={`/card/${characterData.id}`}> 
            <img className="characterCard__image" src={characterData.image} alt={characterData.name} />
            <h4>{characterData.name}</h4>
            <p>{characterData.species}</p>
        </Link>
    </li>
  );
}

export default CharacterCard;
