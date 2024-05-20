import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage"
import About from "./About"
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {


  return <div id="app">
    <Switch>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="/services">
        <Services></Services>
      </Route>
      <Route exact path="/projects">
        <Projects></Projects>
      </Route>
      <Route exact path="/contact">
        <Contact></Contact>
      </Route>
    </Switch>
  </div>
}

export default App;
