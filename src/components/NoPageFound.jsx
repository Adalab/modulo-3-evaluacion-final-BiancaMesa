import { Link } from "react-router-dom";
import "../scss/components/NoPageFound.scss";
import HeaderCharacterDetails from "./HeaderCharacterDetails";
import FooterCharacterDetails from "./FooterCharacterDetails";

function NoPageFound() {
  return (
    <>
      <HeaderCharacterDetails />
      <div className="noPageFoundContainer">
        <h1>Error 404 - Page not found</h1>
        <p>Ooops! The page you are looking for doesn't exit.</p>

        <Link to="/">
          <button className="noPageFoundContainer__button">Back home</button>
        </Link>
      </div>

      <FooterCharacterDetails />
    </>
  );
}

export default NoPageFound;
