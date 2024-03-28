import "../scss/components/HeaderCharacterDetails.scss";
import headerPic from "../images/rick_and_morty3.svg.png";

function HeaderCharacterDetails() {
  return (
    <header className="headerCharacterDetails">
        <img
        className="headerCharacterDetails__imageLogo"
        src={headerPic}
        alt="rick-and-morty-header"
      />
    </header>
  );
}

export default HeaderCharacterDetails;