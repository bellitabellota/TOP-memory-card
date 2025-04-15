function GameInfo({bestScore, currentScore}) {
  return(
    <div className="game-info">
      <p>Collect points by clicking on an image, but never click an image twice.</p>
      <div className="scores">
        <p><strong>Best Score: {bestScore}</strong></p>
        <p><strong>Current Score: {currentScore}</strong></p>
      </div>
    </div>
  )
}

export default GameInfo;