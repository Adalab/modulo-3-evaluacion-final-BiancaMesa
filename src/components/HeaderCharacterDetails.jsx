import { Link } from "react-router-dom";
import headerPic from "../images/rick_and_morty3.svg.png";
import "../scss/components/HeaderCharacterDetails.scss";

function HeaderCharacterDetails() {
  return (
    <header className="headerCharacterDetails">
      <Link to="/">
        <img
          className="headerCharacterDetails__imageLogo"
          src={headerPic}
          alt="rick-and-morty-header"
        />
      </Link>
    </header>
  );
}

export default HeaderCharacterDetails;
