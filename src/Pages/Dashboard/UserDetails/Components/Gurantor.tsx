import { IndividualType } from "../../../../Constants/constants";
type GurantorProp = {
  gurantor: IndividualType;
};
const Gurantor = ({ gurantor }: GurantorProp) => {
  return (
    <div className="top-grid-education">
      <div className="full-name">
        <p>Number of transactions</p>
        <h3>Nill</h3>
      </div>
      <div className="phone-no">
        <p>Alternative address</p>
        <h3>Nil</h3>
      </div>
      <div className="email">
        <p> Alternative phone</p>
        <h3>Nill</h3>
      </div>
    </div>
  );
};

export default Gurantor;
