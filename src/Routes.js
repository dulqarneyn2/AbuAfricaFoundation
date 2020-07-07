import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Core/Home";
import About from "./Core/About";
import Contact from "./Core/Contact";
import Donate from "./Core/Donate";




const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/donate" exact component={Donate} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
