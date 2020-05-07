import React from 'react';
import './index.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const toggleBar = function(){

  console.log("oak");
  


}

function Navigation() {
  return (

    <nav>
      <button onClick={toggleBar}>Burger</button>
        <ul className="list">
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/about">About</Link>
     </li>
     <li>
       <Link to="/projects">Projects</Link>
     </li>
        </ul>
    </nav>

  );
}

export default Navigation;
