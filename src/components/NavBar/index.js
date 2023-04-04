// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, isGameInProgress, currentScore} = props
  return (
    <nav className="navbar-container">
      <div className="game-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-card">
          <p className="score">Score: {currentScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
