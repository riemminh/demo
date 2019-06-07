import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={CreateUser} />
        <Route path="/edit/:id" exact component={EditUser} />
      </Switch>
    );
  }
}

export default Router;
