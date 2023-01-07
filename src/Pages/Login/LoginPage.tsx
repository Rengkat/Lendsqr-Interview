import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Style.scss";
import logo from "../../assets/Union.png";
import banner from "../../assets/lendsqr.png";
import welcomImage from "../../assets/pablo-sign-in 1.png";
// === Form input field types ===
type InitialSateType = {
  name: string;
  password: string;
};
const LoginPage = () => {
  const initialState: InitialSateType = {
    name: "",
    password: "",
  };
  const [loginDetail, setLoginDetails] = useState<InitialSateType | undefined>(
    initialState
  );
  return (
    <div className="login-page">
      <div className="container">
        <div className="banner">
          <div>
            {/* ===logo=== */}
            <div className="logo-wrapper">
              <img className="logo" src={logo} alt="logo" />
              <img className="brand-name" src={banner} alt="brand name" />
            </div>
            {/* == lage image == */}
            <img className="welcomImage" src={welcomImage} alt="welcom image" />
          </div>
        </div>
        {/* ==left side with login part== */}
        <div className="login">
          <div className="loginContainer">
            <div className="welcomText">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <form>
              {/* ==input == */}
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <p>Forgot password?</p>
              <Link to="/" className="login-btn">
                <button>LOG IN</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
