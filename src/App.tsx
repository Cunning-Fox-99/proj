import React from 'react';
import './app.scss'
import {Link} from "react-router-dom";

function App() {
  return <div className="home">
    <h1>Welcome to our app!</h1>
    <span>You can <Link to={'/categories'}>Start</Link> or <Link to='/login'>Login</Link></span>
  </div>
}

export default App;
