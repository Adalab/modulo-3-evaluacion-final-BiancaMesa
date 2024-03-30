import logo from "../images/rick_and_morty3.svg.png";
import rickAndMortyGuns from "../images/rick_and_morty2.jpg";
import portal from "../images/portal.gif";
import "../scss/components/Header.scss"; 


function Header() {
  return (
    <header className="header">
        <img className="header__portal" src={portal} alt="portal" />
        
      {/* <div className="header__upperPart">
        <img className="header__upperPart--portal" src={portal} alt="portal" />
        <img
          className="header__upperPart--imageLogo"
          src={headerPic}
          alt="rick-and-morty-header"
        />
      </div> */}
      
      <div className="header__imageAndLogo"> 
      <img
          className="header__imageAndLogo--logo"
          src={logo}
          alt="rick-and-morty-header"
        />
      <img
        className="header__imageAndLogo--imageBoys"
        src={rickAndMortyGuns}
        alt="rick"
      />

      </div>
      
    </header>
  );
}

export default Header;
