import React from "react";
import { Grid, Card } from "semantic-ui-react";
import LoginDesign from "../../components/Auth/LoginDesign";
import LoginForm from "../../components/Auth/LoginForm";

import "./Auth.scss";

function Auth(): JSX.Element {
  return (
    <div className="auth">
      <Grid columns={2} divided className="auth__grid">
        <Grid.Row>
          <Grid.Column>
            <LoginDesign />
          </Grid.Column>
          <Grid.Column>
            <LoginForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Auth;
