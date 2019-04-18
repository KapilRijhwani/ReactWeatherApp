import React from "react";
import Titles from "./components/Title.js"
import Forms from "./components/Forms.js"
import Weather from "./components/Weather.js"

const API_KEY = "1de6cc64d2d0778d603ca74b012b18d6";

class App extends React.Component{
  render(){
    return(
        <div>
          <h1>YOOOOOO !!!!</h1>
          <Titles />
          <Forms />
          <Weather />
        </div>
      );

  }
}

export default App;