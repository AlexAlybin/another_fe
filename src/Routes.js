import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Home } from "./pages/home/Home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
