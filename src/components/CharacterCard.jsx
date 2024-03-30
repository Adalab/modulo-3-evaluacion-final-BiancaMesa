import {Link} from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard({characterData}) {

    // const characterSpecies = characterData.species; 
    //characterSpecies(characterData.species); 

  return (
    <li className="characterCard">
        <Link className="characterCard__link" to={`/card/${characterData.id}`}> 
        <div className="characterCard__link--images">
            <img className="frontImage" src={characterData.image} alt={characterData.name} />
            <div className="backgroundImage"></div>
            {/* <img className="backgroundImage" src="/src/images/rick_and_morty_portal.png" alt="background-img" /> */}
        </div>
           
            <div className="characterCard__link--info">
                <h4 className="characterName">{characterData.name}</h4>
                <p className="characterSpecies">{characterData.species === "Human" ? `${characterData.species} 👤` : `${characterData.species} 👽`}</p>

                <div className="more_info">   
                    <button className="more_info__btn">More info</button>
                    {/* <button className="more_info__btn"><img className="more_info__img" src="./src/images/rick_and_morty_portal.png" alt="" />More info</button> */}
                    {/* <img className="more_info__img" src="./src/images/rick_and_morty_portal.png" alt="" /> */}
                </div>

            </div>
        </Link>
    </li>
  );
}

export default CharacterCard;
