import "../scss/components/CharacterDetails.scss";

function CharacterDetails({character}) {
  return (
    <li className="characterDetails">
        <img className="characterDetails__image" src={character.image} alt={character.name} />
        <h4>{character.name}</h4>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.planet}</p>
        <p>Episodes: {character.episodesNumber}</p>
    </li>
  );
}

export default CharacterDetails;