import React from "react";

import loginBanner from "../../../assets/img/svg/banner_login.svg";
import "./LoginDesign.scss";

function LoginDesign(): JSX.Element {
  return (
    <div className="login-design">
      <h1>
        RFID <span>Admin</span>
      </h1>
      <h2>Sitio de Administración y Control</h2>
      <img src={loginBanner} alt="loginBanner" />
    </div>
  );
}

export default LoginDesign;
