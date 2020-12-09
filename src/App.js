import React from 'react';
import './App.css';

import {Post} from './features/Posts/Post'
import {Navbar} from './features/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="container">
            <div id="center" className="column">
                <Post />
            </div>
            <div id="left" className="column"></div>
            <div id="right" className="column"></div>
        </div>
    </div>
  );
}

export default App;
