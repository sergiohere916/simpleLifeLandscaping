import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage  from "./HomePage";


function App() {

  const [allLandscapeImages, setAllLandscapeImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  // useEffect(()=> {
  //   fetch("/images")
  //   .then(data => data.json())
  //   .then(images => setAllLandscapeImages(images))
  // })

  function handleSubmit(e) {
    e.preventDefault()
    const newImageData = {"image_url": newImage }

    fetch("/images", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newImageData)
    })
    .then(res => res.json())
    .then(postedImageData => setAllLandscapeImages([...allLandscapeImages, postedImageData]))
  }

  return (
  <div>
    <h1>Simple Life Project: </h1>
    <Switch>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  </div>);
}

export default App;
