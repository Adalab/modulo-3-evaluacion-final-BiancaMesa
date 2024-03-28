import "../scss/components/Header.scss";
import logo from "../images/rick_and_morty3.svg.png";
import rickAndMortyGuns from "../images/rick_and_morty2.jpg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__imageLogo"
        src={logo}
        alt="rick-and-morty-header"
      />
      <img
        className="header__imageBoys"
        src={rickAndMortyGuns}
        alt="rick"
      />
    </header>
  );
}

export default Header;
