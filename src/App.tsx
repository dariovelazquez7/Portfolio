import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import { Route } from "react-router-dom";
import About from "./components/About/About"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </div>
  );
}

export default App;
