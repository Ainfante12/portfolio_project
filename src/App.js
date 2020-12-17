// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/home';
import {Route, BrowserRouter as Router} from "react-router-dom";
import angie from './IMG_5482.JPG';


function App() {
  return (
    <Router>
     
      <div className="App">
    
        <header className="App-header">
       
          <img src={angie} alt="pic of angie" height={400} width={500}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
        </header>
      </div> 
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;
