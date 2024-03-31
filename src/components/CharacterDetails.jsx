import {Link} from "react-router-dom";
//import heartBeat from "../images/heartbeat.png";
import portalRunning from "../images/portal_running.gif"; 
import PropTypes from "prop-types"; 
import "../scss/components/CharacterDetails.scss";

function CharacterDetails({character}) {
  return (
    <>
    {/* <li className={`characterDetails ${isVisible} ? 'visible' : ''}`}> */}
        {/* <li className={`${isVisible} ? 'characterDetails.visible' : 'characterDetails'}`}> */}
    <li className="characterDetails" >
        <Link className="characterDetails__link" to="/">
            <p className="characterDetails__link--backToList">Back home</p>
            <i className="characterDetails__link--backToList-icon fa-solid fa-x22222"></i>
        </Link>
        
        <img className="characterDetails__image" src={character.image} alt={character.name} />

        <h4 className="characterDetails__name">{character.name}</h4>

        <p>Species: {character.species === "Human" ? `${character.species} 👤` : `${character.species} 👽`}</p>

        <p>Status: {character.status === "Alive" ? `${character.status} ` : `${character.status} `}
          {/* {character.status === "Alive" &&  <img className="heart" src={heartBeat} alt="heartbeat" />} */}
          {character.status === "Alive" &&  <i className="fa-solid fa-heart-pulse"></i>}
          {character.status === "Dead" && <i className="fa-solid fa-skull-crossbones"></i>}
          {/* {character.status === "unknown" && <i className="fa-solid fa-question"></i>} */}
          {character.status === "unknown" && `🧐`}
        </p>
       
        <p>Origin: {character.planet}</p>
        <p className="characterDetails__episodes">Episodes: {character.episodesNumber}</p>
    </li>
    <footer className="characterDetailsFooter">
      <img className="characterDetailsFooter__gif" src={portalRunning} alt="portalRunning" />
    </footer>
    </>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.object //isRequired --> error
};

export default CharacterDetails;