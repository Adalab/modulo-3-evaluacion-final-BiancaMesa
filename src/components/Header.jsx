import "../scss/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <img
        className="header__imageLogo"
        src="../images/rick_and_morty3.svg.png"
        alt="rick-and-morty-header"
      />
      <img
        className="header__imageBoys"
        src=".,/images/rick_and_morty2.jpg"
        alt="rick"
      />
    </header>
  );
}

export default Header;
