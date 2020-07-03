import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";

import Posts from "./components/Post";
import Postforms from "./components/Postforms";

import store from "./store";


function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>Welcome to React</h5>
        </header>

        <Postforms />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
