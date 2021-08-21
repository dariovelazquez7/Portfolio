import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import { Route } from "react-router-dom";
import About from "./components/About/About"
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Slide from './components/Test/Test';
import Sidebar from './components/Sidebar/Sidebar'
import Slide2 from "./components/Test2/Test2"


function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      
      <Route exact path="/test2" component={Slide2}/>
      <Route exact path="/test" component={Slide}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projects" component={Projects}/>

    </div>
  );
}

export default App;
