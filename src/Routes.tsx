import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { MinimumLayout } from "./layouts";
import { LoginPage } from "./pages";
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <RouteWithLayout
        component={LoginPage}
        exact
        layout={MinimumLayout}
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
