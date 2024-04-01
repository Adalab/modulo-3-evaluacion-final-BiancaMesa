import loveGif from "../images/love.gif";
import "../scss/components/Footer.scss";

function Footer() {
  return (
    <footer className="landingFooter">
      <img className="landingFooter__gif" src={loveGif} alt="loveGif" />
    </footer>
  );
}

export default Footer;
