import React from 'react';
import './index.scss';
import Error from '../error';
import {
    Switch,
    Route,
} from "react-router-dom";


function Page() {
  return (
 

 <div>
  
<Switch>

<Route exact path="/">
<div> Home Sweet Home</div>
</Route>x

<Route path="/about">
<div>About Us</div>
</Route>
<Route path="/projects">
<div>About our Projects</div>
</Route>

<Route path="*">
        <Error/>
</Route>
  </Switch>

 </div>


  )
}

export default Page;
