import React from "react";
import "./App.css";
import UserList from "./usercomponents/UserList";

function App() {
  return (
    <div className="App">
      <UserList fetchUrl="https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw" />
    </div>
  );
}

export default App;
