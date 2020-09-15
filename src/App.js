import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact  path="/contact" component={Contact} />

        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
