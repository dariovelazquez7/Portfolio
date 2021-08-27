import React from 'react';
import { Route } from "react-router-dom";
import Slide from "./components/Slide/Slide"
import Form from "./components/Form/Form"


function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={Slide}/>
      <Route exact path="/form" component={Form}/>
    </div>
  );
}

export default App;
