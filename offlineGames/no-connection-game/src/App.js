import React from 'react';

import './App.css';
import GameScreen from './components/GameScreen';

function App() {
  return (
    <div className="App">
      <h2>Game</h2>
      <GameScreen height={"400px"} width={"300px"} />
    </div>
  );
}

export default App;
