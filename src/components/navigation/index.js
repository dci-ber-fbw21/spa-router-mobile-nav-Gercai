import React, {useState, useEffect, useRef} from 'react';
import './index.scss';
import {
    NavLink
} from "react-router-dom";

function Navigation() {

const node = useRef();

  const [open, setOpen] = useState(false);
  const [homeColor, setHome] = useState("blue");
  const [aboutColor, setAbout] = useState("blue");
  const [projectColor, setProject] = useState("blue");

    useEffect(() => {
        document.addEventListener("mousedown",handleClick);
    return () => {
         document.removeEventListener("mousedown",handleClick);
    };
  },[])

  const handleClick = e =>{
    if(node.current.contains(e.target)){
      return;    
    }
    setOpen(false);
  }

  const handleChange = selectedValue => {

    setOpen(false);
    setHome("blue");
    setProject("blue");
    setAbout("blue");

    switch(selectedValue){      
      case "home":
            setHome("red");
      break;
      case "about":
            setAbout("red");
      break;
      case "project":
          setProject("red");
      break;    
      default: 
      break;
    }
  }

  return (
    <nav ref={node}>
        <input  type="image" onClick={e => setOpen(!open)} src={require("../../images/bar.svg")} alt="" height="40" width="30"/>    
     {open && <ul className="list"> 
        <li>
          <NavLink to="/"><span style={{color:homeColor}} onClick={() => handleChange("home")}>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/about"><span style={{color:aboutColor}} onClick={() => handleChange("about")}>About</span></NavLink>
        </li>
        <li>
          <NavLink to="/projects"><span style={{color:projectColor}} onClick={() => handleChange("project")}>Projects</span></NavLink>
        </li> 
        <li>
          <NavLink to="/no-match">NoMatch</NavLink>
        </li>
  </ul> }
    </nav>
  );
}

export default Navigation;
