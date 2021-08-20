import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import { Route } from "react-router-dom";
import About from "./components/About/About"
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projects" component={Projects}/>

    </div>
  );
}

export default App;
