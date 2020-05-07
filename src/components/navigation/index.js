import React, {useState, useEffect, useRef} from 'react';
import './index.scss';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

function Navigation() {

const node = useRef();

const [open, setOpen] = useState(false);
const [homeColor,setState1] = useState("blue");
  const [aboutColor,setState2] = useState("blue");
  const [projectColor,setState3] = useState("blue");

  useEffect(() => {
    document.addEventListener("mousedown",handleClick);
    
    return () => {
      document.removeEventListener("mousedown",handleClick);
    };
  },[])

  const handleClick = e =>{
    if(node.current.contains(e.target)){
      console.log(open);
      return;
    }
  // outside Click
    setOpen(false);
  }
 
  return (
    <nav ref={node}>
        <input type="image" onClick={e => setOpen(!open)} src={require("../../images/bar.svg")} alt="" height="40" width="30"/>
     
     {open && <ul className="list"> 
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
  </ul> }
    </nav>
  );
}

export default Navigation;
