import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";

import Posts from "./components/Post";
import Postforms from "./components/Postforms";

import store from "./store";

import { FunctionalPost } from "./components/Functional_Post";


/* this is for redux */
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
        {/* <Posts /> */}
        <FunctionalPost />
      </div>
    </Provider>
  );
}

/* pagination, but need to use Hooks and Axios */
// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostsPerPage] = useState(10);


//   return(
//     <div className="container">
//       <h1>My App</h1>
//     </div>
//   )
// }

export default App;
