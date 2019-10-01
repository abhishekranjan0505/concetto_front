import React from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
