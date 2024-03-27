import "../scss/components/CharacterCard.scss";

function CharacterCard({characterData}) {
  return (
    <li className="characterCard">
        <img className="characterCard__image" src={characterData.image} alt={characterData.name} />
        <h4>{characterData.name}</h4>
        <p>{characterData.species}</p>
    </li>
  );
}

export default CharacterCard;
