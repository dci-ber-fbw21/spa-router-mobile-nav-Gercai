import React from 'react';
import './App.css';
import Header from './components/header'
import Page from './components/page'
import {Helmet} from 'react-helmet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Helmet>

  <meta charSet="utf-8" />
  <title>Dropdown</title>
  <link rel="canonical" href="http://mysite.com/example" />
           
</Helmet>

      <Router>
        <Header></Header>
        <Page></Page>
      </Router>
    </div>
  );
}

export default App;
