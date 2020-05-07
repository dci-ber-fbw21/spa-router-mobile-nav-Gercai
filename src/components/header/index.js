import React from 'react';
import './index.scss';
import Navigation from '../navigation'

function App() {
  return (


<article className="header">
<div className="icon">
    <img src={require("../../images/bar.svg")} alt="" height="40" width="30"/>
</div>
    <div className="icon2">
        <Navigation></Navigation>
    </div>
</article>
  );
}

export default App;
