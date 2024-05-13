import React from "react";
import App from "./components/App";
import "./index.css";
import "./css/Services.css"
import "./css/Homepage.css"
import "./css/Projects.css"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter><App/></BrowserRouter>);
