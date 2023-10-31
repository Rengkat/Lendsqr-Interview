import "./style.scss";
import { useEffect, useState } from "react";
import DetailsComponent from "../Components/DetailsComponent";
import EducationDetail from "../Components/EducationDetail";
import Social from "../Components/Social";
import Gurantor from "../Components/Gurantor";
import { useOutletContext } from "react-router-dom";

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
