import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage"

function App() {
  return <>
    <Switch>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
    </Switch>
  </>
}

export default App;
