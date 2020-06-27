import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from "./components/Post";
import Postforms from "./components/Postforms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Welcome to React</h5>
      </header>

      <Postforms />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
