import React, {useState} from 'react';
import './index.scss';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

const toggleBar = function(){
  document.querySelector("ul").style.display==="none"
  ?document.querySelector("ul").style.display="block"
  :document.querySelector("ul").style.display="none";
}

function Navigation() {

  const [homeColor,setState1] = useState("blue");
  const [aboutColor,setState2] = useState("blue");
  const [projectColor,setState3] = useState("blue");
 
  return (
    <nav>
      <button onClick={toggleBar}>Burger</button>
      <ul className="list"> 
        <li>
          <NavLink to="/"><span style={{color:homeColor}} onClick={() => setState1("red")}>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/about"><span style={{color:aboutColor}} onClick={() => setState2("red")}>About</span></NavLink>
        </li>
        <li>
          <NavLink to="/projects"><span style={{color:projectColor}} onClick={() => setState3("red")}>Projects</span></NavLink>
        </li> 
        <li>
          <NavLink to="/no-match">NoMatch</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
