import "./style.scss";
import { Outlet, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const StylistLayout = () => {
  return (
    <div className="detail-container">
      <Link to="/stylist" className="arrow">
        <HiArrowLongLeft fontSize={30} /> <p>Back to User</p>
      </Link>
      <div className="sub">
        <h1>Stylist Details</h1>
        <div className="btns">
          <button className="blk-btn">BLACKLIST</button>
          <button className="act-btn">ACTIVE USER</button>
        </div>
      </div>
      <div className="details-heading">
        <div className="detail-profile">
          <div className="left">
            <div className="image">
              {/* <img className="image" src={data?.profile.avatar} alt="image" /> */}
              <AiOutlineUser fontSize={30} />
            </div>
            <div className="name">
              <h1>
                Alexander FashionHub
                {/* {data?.profile.lastName} {data?.profile.firstName} */}
              </h1>
              <p>12, Jos, Plateau state</p>
              <p>#234567563</p>
            </div>
          </div>
        </div>
        <div className="links">
          <NavLink className="link" to="general-detail">
            Stylist Details
          </NavLink>

          <NavLink className="link" to="products">
            Products
          </NavLink>
        </div>
      </div>
      <div className="main-detail">
        <div className="containerUserDetail">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StylistLayout;
