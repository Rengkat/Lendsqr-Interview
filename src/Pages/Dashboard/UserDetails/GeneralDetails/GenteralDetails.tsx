import "./style.scss";
import DetailsComponent from "../Components/DetailsComponent";
import Social from "../Components/Social";
import Gurantor from "../Components/Gurantor";

const GenteralDetails = () => {
  return (
    <div>
      <div className="personal-information">
        <h2 className="heading">Personal Information</h2>
        <DetailsComponent />

        <h2 className="heading">Socials</h2>
        <Social />
        <h2 className="heading">Others</h2>
        <Gurantor />
      </div>
    </div>
  );
};

export default GenteralDetails;
