import CardGrid from './components/CardGrid';
import GameInfo from './components/GameInfo';
import { useState } from 'react';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <>
    <h1>Memory Card</h1>
    <GameInfo bestScore={bestScore} currentScore={currentScore} />
    <CardGrid currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </>
  )
}

export default App;
