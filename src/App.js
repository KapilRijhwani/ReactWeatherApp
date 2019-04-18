import React from "react";
import Titles from "./components/Title.js"
import Forms from "./components/Forms.js"
import Weather from "./components/Weather.js"

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