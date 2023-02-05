import "./style.scss";
import brandName from "../../assets/lendsqr.png";
import logo from "../../assets/Union.png";
import profileImage from "../../assets/25-100-alexanderrengkat-2875423963.jpg";
import {
  BsSearch,
  MdArrowDropDown,
  IoMdNotificationsOutline,
} from "react-icons/all";
import { useState } from "react";
import { removeUserFromLocalStorage } from "../../Redux/Features/localStorage";

function Nav() {
  const [isdrop, setIsDrop] = useState(false);
  const handleClick = () => {
    removeUserFromLocalStorage();
    window.location.reload();
  };
  return (
    <nav>
      <div className="nav-container">
        {/* ==logo== */}
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <img className="brand-name" src={brandName} alt="Brand name" />
        </div>
        {/* ==search field== */}
        <div className="search-input">
          <input type="text" placeholder="Search for anything" />
          <div className="icon">
            <BsSearch />
          </div>
        </div>
        {/* ==profile details== */}
        <div className="profile">
          <p>Docs</p>
          <div className="notification-icon">
            <IoMdNotificationsOutline />
          </div>
          <div
            className="profile-detail"
            onClick={(e) => setIsDrop((pre) => !pre)}>
            <img className="proImage" src={profileImage} alt="" />
            <p>Alexander</p>
            <MdArrowDropDown className="drp-icon" />
          </div>
          {isdrop ? (
            <div onClick={handleClick} className="dropdown">
              <h4>Logout</h4>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
