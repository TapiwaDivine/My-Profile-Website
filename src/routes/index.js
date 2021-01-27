import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "../components/HomePage/Home";
import About from "../components/AboutPage/About";
import Skills from "../components/skills/Skills";

const BaseRouter = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Skills" component={Skills} />
    </Switch>
  );
};

export default BaseRouter;
