import portalRunning from "../images/portal_running.gif";
import "../scss/components/CharacterDetails.scss";

function FooterCharacterDetails() {
  return (
    <footer className="characterDetailsFooter">
      <img
        className="characterDetailsFooter__gif"
        src={portalRunning}
        alt="portalRunning"
      />
    </footer>
  );
}

export default FooterCharacterDetails;
