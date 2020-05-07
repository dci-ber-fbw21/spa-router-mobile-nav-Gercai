import React from 'react';
import './index.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Page() {
  return (

 <div>
  <Switch>

<Route path="/about">
<div>About1</div>
</Route>
<Route path="/users">
<div>Users1</div>

</Route>
<Route path="/">
<div> Home1</div>
</Route>
  </Switch>

 </div>


  )
}

export default Page;
