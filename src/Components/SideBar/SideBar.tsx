import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="side-bar-container">
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default SideBar;
