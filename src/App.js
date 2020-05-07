import React from 'react';
import './App.css';
import Header from './components/header'
import Page from './components/page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Page></Page>
      </Router>
    </div>
  );
}

export default App;
