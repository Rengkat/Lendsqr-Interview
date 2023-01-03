import { Link } from "react-router-dom";
import "./Style.scss";
import logo from "../../assets/Union.png";
import banner from "../../assets/lendsqr.png";
import welcomImage from "../../assets/pablo-sign-in 1.png";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="banner">
          {/* ===logo=== */}
          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="logo" />
            <img className="brand-name" src={banner} alt="brand name" />
          </div>
          <div className="welcomImage">
            <img src={welcomImage} alt="welcom image" />
          </div>
        </div>
        <div className="login"></div>
      </div>
      {/* <Link to="/main-dashboard">
        <button>Login</button>
      </Link> */}
    </div>
  );
};

export default LoginPage;
