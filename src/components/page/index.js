import React from 'react';
import './index.scss';
import Error from '../error';
import {Helmet} from "react-helmet";
import {
    Switch,
    Route,
} from "react-router-dom";


function Page() {
  return (
 

<div>
<Switch>
    <Route exact path="/">
    
            <article className="page"> Home Sweet Home</article>
    </Route>

    <Route path="/about">

    <Helmet>
    <title>About</title>
    <meta name="description" content="Nested component" />
    </Helmet>
  

    <article className="page">About Us</article>
    </Route>
    <Route path="/projects">

    <Helmet>
    <title>Project</title>
    <meta name="description" content="Nested component" />
    </Helmet>
    <article className="page">About our Projects</article>
    </Route>

    <Route path="*">
            <Error/>
    </Route>
</Switch>
</div>
  )
}

export default Page;
