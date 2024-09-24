import './index.css'

const NavBar = props => {
  const {sc, tc, winning, lossing} = props

  return (
    <nav className="navbar">
      <div className="card1">
        <img
          className="logoEmojiImg"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      {!(winning || lossing) && (
        <div className="card2">
          <p className="score-head1">Score: {sc}</p>
          <p className="score-head2">Top Score: {tc}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
