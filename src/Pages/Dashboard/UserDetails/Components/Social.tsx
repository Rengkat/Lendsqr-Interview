import { IndividualType } from "../../../../Constants/constants";

interface SocialsProps {
  socials: IndividualType;
}

const Social = ({ socials }: SocialsProps) => {
  return (
    <div className="top-grid-education">
      <div className="full-name">
        <p>Twitter</p>
        <h3>{socials?.socials?.twitter ? socials?.socials?.twitter : "Nill"}</h3>
      </div>
      <div className="phone-no">
        <p>facebook</p>
        <h3>{socials?.socials?.facebook ? socials?.socials?.facebook : "Nill"}</h3>
      </div>
      <div className="email">
        <p>instagram</p>
        <h3>{socials?.socials?.instagram ? socials?.socials?.instagram : "Nill"}</h3>
      </div>
      <div className="email">
        <p>whatApp</p>
        <h3>{socials?.socials?.instagram ? socials?.socials?.instagram : "Nill"}</h3>
      </div>
    </div>
  );
};

export default Social;
