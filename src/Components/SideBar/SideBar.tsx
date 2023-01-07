import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import {
  navLinksBusinesses,
  navLinksCustomers,
  navLinksSetting,
} from "../../Constants/constants";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div>
          <NavLink to="/dashboard">
            <div>Dashboard</div>
          </NavLink>
        </div>
        <div className="Heading">
          <h5>customers</h5>
        </div>
        {navLinksCustomers.map((navLink) => {
          return (
            <NavLink key={navLink.name} to={navLink.link}>
              <span>{navLink.icon}</span>
              <div>{navLink.name}</div>
            </NavLink>
          );
        })}

        {/* === Bussiness== */}
        <div className="Heading">
          <h5>Businesses</h5>
        </div>
        {navLinksBusinesses.map((navLink) => {
          return (
            <NavLink key={navLink.name} to={navLink.link}>
              <div>{navLink.name}</div>
            </NavLink>
          );
        })}
        {/* ===setting=== */}
        <div className="Heading">
          <h5>Settings</h5>
        </div>
        {navLinksSetting.map((navLink) => {
          return (
            <NavLink key={navLink.name} to={navLink.link}>
              <div>{navLink.name}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
