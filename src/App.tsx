import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Slide from "./components/Slide/Slide"


function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={Slide}/>
    </div>
  );
}

export default App;
