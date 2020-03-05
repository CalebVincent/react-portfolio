import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Contact />
    // </div>

    <Router>
      <div className="App">
      <Navbar />
      <Wrapper>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cv-react-portfolio" component={Home} />
        {/* <Route exact path="/gallery" component={Gallery} /> */}
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
