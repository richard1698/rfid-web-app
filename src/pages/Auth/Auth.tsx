import React from "react";
import LoginDesign from "../../components/Auth/LoginDesign";
import LoginForm from "../../components/Auth/LoginForm";

import "./Auth.scss";

function Auth(): JSX.Element {
  return (
    <div className="auth-page">
      <div className="square" />
      <div className="auth">
        <LoginDesign />
        <LoginForm />
      </div>
    </div>
  );
}

export default Auth;
