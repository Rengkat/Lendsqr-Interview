import "./style.scss";
import { IndividualType } from "../../../../Constants/constants";
interface DetailsProps {
  profile: IndividualType;
}
const DetailsComponent = ({ profile }: DetailsProps) => {
  return (
    <div className="top-grid">
      <div className="full-name">
        <p>Full Name</p>
        <h3>
          Alexander Rengkat
          {profile?.profile?.lastName} {profile?.profile?.firstName}
        </h3>
      </div>
      <div className="phone-no">
        <p>Phone number</p>
        <h3>080868486879{profile?.profile?.phoneNumber}</h3>
      </div>
      <div className="email">
        <p>Email address</p>
        <h3>rengkat@gmail.com{profile?.email}</h3>
      </div>

      <div className="bvn">
        <p>User ID</p>
        <h3>#12345678234{profile?.profile?.bvn}</h3>
      </div>
      <div className="address">
        <p>Delivery Address</p>
        <h3>16,Jos Nigeria{profile?.profile?.bvn}</h3>
      </div>
      <div className="join">
        <p>Joint</p>
        <h3>16 December, 2023{profile?.profile?.bvn}</h3>
      </div>
    </div>
  );
};

export default DetailsComponent;
