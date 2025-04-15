function GameInfo({bestScore, currentScore}) {
  return(
    <div className="game-info">
      <p>Collect points by clicking on an image, but never click an image twice.</p>
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  )
}

export default GameInfo;