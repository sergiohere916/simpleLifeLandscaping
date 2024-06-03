import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage"
import About from "./About"
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";
import Admin from "./Admin"

function App() {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch("/images")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPictures(data) 
    })
  }, [])

  function handleDeleteProject(name) {
    const newPictures = pictures.filter(picture => {
      return picture.name !== name;
    })

    setPictures(newPictures)
  }

  function addNewProject(project) {
    setPictures([project, ...pictures])
  }

  return <div id="app">
    {/* <Header></Header> */}
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
      <Route exact path="/admin">
      <Admin pictures={pictures} addNewProject={addNewProject} handleDeleteProject={handleDeleteProject}></Admin>
      </Route>
    </Switch>
  </div>
}

export default App;
