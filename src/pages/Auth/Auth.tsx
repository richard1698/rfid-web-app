import React from "react";
import { Card, Grid } from "semantic-ui-react";
import LoginDesign from "../../components/Auth/LoginDesign";
import LoginForm from "../../components/Auth/LoginForm";

import "./Auth.scss";

function Auth(): JSX.Element {
  return (
    <>
      <div className="square" />
      <Card className="auth">
        <LoginDesign />
        <LoginForm />
      </Card>
    </>
  );
}

export default Auth;
