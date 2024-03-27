import {Link} from "react-router-dom";
import "../scss/components/CharacterDetails.scss";

function CharacterDetails({character}) {
  return (

    <li className="characterDetails">
        <Link className="characterDetails__link" to="/">
            <p className="characterDetails__link--backToList">Back to list </p>
            <i className="characterDetails__link--backToList-icon fa-solid fa-x"></i>
        </Link>
        <img className="characterDetails__image" src={character.image} alt={character.name} />
        <h4 className="characterDetails__name">{character.name}</h4>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.planet}</p>
        <p className="characterDetails__episodes">Episodes: {character.episodesNumber}</p>
    </li>
  );
}

export default CharacterDetails;