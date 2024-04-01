import CharacterCard from "./CharacterCard";
import NoNameFound from "./NoNameFound";
import Loading from "./Loading";
import PropTypes from "prop-types";
import "../scss/components/CharactersList.scss";

function CharactersList({ characters, message, isLoading }) {
  return (
    <section>
      <NoNameFound message={message} />
      <Loading isLoading={isLoading} />
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
  isLoading: PropTypes.bool.isRequired,
};

export default CharactersList;
