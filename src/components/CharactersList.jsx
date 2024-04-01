import CharacterCard from "./CharacterCard";
import NoNameFound from "./NoNameFound";
import PropTypes from "prop-types";
import "../scss/components/CharactersList.scss";

function CharactersList({ characters, message }) {
  return (
    <section>
      <NoNameFound message={message} />
      <ul className="charactersList">
        {characters.map((character) => {
          return <CharacterCard characterData={character} key={character.id} />;
        })}
      </ul>
    </section>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
};

export default CharactersList;
