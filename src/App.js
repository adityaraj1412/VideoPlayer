import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Custom Video Player</h1>
      </header>
      <main>
        <VideoPlayer />
      </main>
      <footer>
        <p>©2024_Aditya_Raj_12008354_LPU</p>
        <p>Aditya Raj</p>
      </footer>
    </div>
  );
};

export default App;

