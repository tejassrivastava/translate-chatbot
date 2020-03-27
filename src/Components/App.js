import React from "react";
import "./App.css";

import Header from "./Header/Header";
import Workspace from "./Workspace/Workspace";
function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <Workspace></Workspace>
    </div>
  );
}

export default App;
