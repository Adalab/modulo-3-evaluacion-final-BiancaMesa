import "../scss/components/HeaderCharacterDetails.scss";

function HeaderCharacterDetails() {
  return (
    <header className="headerCharacterDetails">
         <img
        className="headerCharacterDetails__imageLogo"
        src="./src/images/rick_and_morty3.svg.png"
        alt="rick-and-morty-header"
      />
    </header>
  );
}

export default HeaderCharacterDetails;