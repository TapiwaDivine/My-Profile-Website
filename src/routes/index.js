import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/HomePage/Home";
import About from "../components/AboutPage/About";
import Skills from "../components/skills/Skills";
import PageNotFound from "../components/errorhandling/PageNotFound";

const BaseRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default BaseRouter;
