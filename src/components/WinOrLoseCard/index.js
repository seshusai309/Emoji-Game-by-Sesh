import './index.css'

const WinCard = props => {
  const {fun, winning, lossing, score, totalScore} = props
  const clickedAgain = () => {
    fun()
  }
  return (
    <div className="container-winLose">
      {winning && (
        <div className="sub-Lost-container">
          <div>
            <h1 className="lose-head">You Won</h1>
            <p>
              Best Score <br />
            </p>
            <p className="highlight">12/12</p>
            <button type="button" onClick={clickedAgain} className="button-8">
              Play Again
            </button>
          </div>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        </div>
      )}

      {lossing && (
        <div className="sub-Lost-container">
          <div>
            <h1 className="lose-head">You lose</h1>
            <p>
              Score <br />
            </p>
            <p>{score}/12</p>
            <button type="button" onClick={clickedAgain} className="button-8">
              Play Again
            </button>
          </div>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
        </div>
      )}
    </div>
  )
}

export default WinCard
