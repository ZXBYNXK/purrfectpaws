/*
  Root Component Renderer 
    The @react-dom package renders the "<App />" component here.
    When the "npm start" command is used "start" in refrence to the
    package.json file configuration properties value will be the raw 
    command execution context {"start":"node index.js"}. 
    this file is commonly used.
*/
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./src/App";
import "./src/styles/styles.css"
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);