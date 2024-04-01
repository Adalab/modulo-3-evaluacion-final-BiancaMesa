import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import localStorage from "../services/localStorage";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom"; 
import "../scss/components/CharacterDetails.scss";

function CharacterDetails({ character, cardId }) {

  const previousCardId = cardId - 1;
  const nextCardId = cardId + 1;

  ///////// LOCAL STORAGE ??? ///////
  // const { id } = useParams();

  // const savedCharacter = localStorage.get('character');
  // const characterData =
  //   savedCharacter && parseInt(savedCharacter.id) === parseInt(id)
  //     ? savedCharacter
  //     : characters.find((character) => character.id === parseInt(id));

  //     useEffect(() => {
  //       if (characterData && savedCharacter.id !== characterData.id) {
  //         localStorage.set('character', characterData);
  //       }
  //     }, [savedCharacter, characterData]);
    
  //     if (!characterData) {
  //       return (
  //         <div className="notFound">
  //           <Link to="/">
  //             <button className="detail__button">
  //               <i className="fa-solid fa-chevron-left"></i> Back
  //             </button>
  //           </Link>
  //           <p className="notFound__messagge">Sorry, character not found</p>
  //         </div>
  //       );
  //     }


 //////////
 
  return (
    <>
    <Link to={"/card/" + previousCardId}>
      <i className="angle fa-solid fa-angle-left"></i>
    </Link>

      <li className="characterDetails">
        <Link className="characterDetails__link" to="/">
          <p className="characterDetails__link--backToList">Back home</p>
          <i className="characterDetails__link--backToList-icon fa-solid fa-x22222"></i>
        </Link>

        <img
          className="characterDetails__image"
          src={character.image}
          alt={character.name}
        />

        <h4 className="characterDetails__name">{character.name}</h4>
        
        <p className="characterDetails__species">
          <strong className="subtitles">Species: </strong>
          {character.species === "Human"
            ? `${character.species} 👤`
            : `${character.species} 👽`}
        </p>

        <p className="characterDetails__status">
          {" "}
          <strong className="subtitles">Status:</strong>{" "}
          {character.status === "Alive"
            ? `${character.status} `
            : `${character.status} `}

          {character.status === "Alive" && (
            <i className="fa-solid fa-heart-pulse"></i>
          )}

          {character.status === "Dead" && (
            <i className="fa-solid fa-skull-crossbones"></i>
          )}

          {character.status === "unknown" && `🧐`}
        </p>

        <p className="characterDetails__origin">
          <strong className="subtitles">Origin:</strong> 
          {character.planet}
        </p>

        <p className="characterDetails__episodes">
          <strong className="subtitles">Episodes:</strong>{" "}
          {character.episodesNumber}
        </p>
      </li>

      <Link to={"/card/" + nextCardId}>
        <i className="angle fa-solid fa-angle-right"></i>
      </Link>
     
    </>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.object, //isRequired --> error
  cardId: PropTypes.number.isRequired //I thought it was a number!!
};

export default CharacterDetails;
