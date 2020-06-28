import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";

import Overview from "./Overview";
import Login from "./Login";
import Cleancity from "./Cleancity";
import Hi from "./Hi"
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ component, path, ...options }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Route {...options} component={component} />;
  } else {
    return <Redirect to={{
      pathname: "/login",
      state: {
        from: path,
      },
    }}/>;
  }
};

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/overview" />
      <PrivateRoute path="/overview" component={Overview} />
      <PrivateRoute path="/hi" component={Hi} />
      <Route path="/cleancity" component={Cleancity} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
