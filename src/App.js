import React from 'react';
import './App.css'; // Make sure you have your CSS styles defined here
import Board from './Board'; // Assuming your Board component is in a file named Board.js

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
