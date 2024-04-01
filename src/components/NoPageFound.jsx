import { Link } from "react-router-dom";
import "../scss/components/NoPageFound.scss";

function NoPageFound() {
  return (
    <div className="noPageFoundContainer">
      <h1>Error 404 - Page not found</h1>
      <p>Ooops! The page you are looking for doesn't exit.</p>

      <Link to="/">
        <button className="noPageFoundContainer__button">Back home</button>
      </Link>
    </div>
  );
}

export default NoPageFound;
