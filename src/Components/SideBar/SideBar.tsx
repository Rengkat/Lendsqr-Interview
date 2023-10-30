import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { FaHome } from "react-icons/fa";
import { navLinksCustomers } from "../../Constants/constants";
import brandName from "../../assets/lendsqr.png";
import logo from "../../assets/Union.png";
const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <img className="brand-name" src={brandName} alt="Brand name" />
      </div>
      <div className="side-bar-container">
        <div className="top-link">
          <NavLink className="nav" to="/dashboard">
            <span>
              <FaHome />
            </span>
            <div>Dashboard</div>
          </NavLink>
        </div>
        <div className="Heading">
          <h5>customers</h5>
        </div>
        {navLinksCustomers.map((navLink) => {
          return (
            <NavLink className="nav" key={navLink.name} to={navLink.link}>
              <span>{navLink.icon}</span>
              <div className="sideNavLink">{navLink.name}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
