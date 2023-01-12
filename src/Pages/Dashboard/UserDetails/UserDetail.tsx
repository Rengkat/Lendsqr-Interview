import "./style.scss";
import { HiArrowLongLeft } from "react-icons/all";
import { Link } from "react-router-dom";
const UserDetail = () => {
  return (
    <div className="detail-container">
      <Link to="/user" className="arrow">
        <HiArrowLongLeft fontSize={30} /> <p>Back to User</p>
      </Link>
      <div className="sub">
        <h1>User Details</h1>
        <div className="btns">
          <button className="blk-btn">BLACKLIST</button>
          <button className="act-btn">ACTIVE USER</button>
        </div>
      </div>
      <div className="details-heading"></div>
    </div>
  );
};

export default UserDetail;
