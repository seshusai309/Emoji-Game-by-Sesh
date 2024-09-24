/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmoji: [], score: 0, totalScore: 0, won: false, lost: false}

  wontheMatch = () => {
    this.setState(each => ({won: !each.won, totalScore: 12}))
  }

  loseMatch = () => {
    const {totalScore, score} = this.state
    if (totalScore > score) {
      this.setState(each => ({totalScore: each.totalScore, lost: !each.lost}))
    } else {
      this.setState(each => ({lost: !each.lost}))
    }
  }

  playAgain = () => {
    this.setState({
      clickedEmoji: [],
      score: 0,
      won: false,
      lost: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, totalScore, won, lost} = this.state

    const emojiClicked = id => {
      const {clickedEmoji} = this.state
      console.log(clickedEmoji)
      const isEmojiPresent = clickedEmoji.includes(id)

      if (isEmojiPresent) {
        this.loseMatch()
      } else if (emojisList.length - 1 === clickedEmoji.length) {
        this.wontheMatch()
      } else if (score >= totalScore) {
        this.setState(prev => ({
          clickedEmoji: [...clickedEmoji, id],
          score: prev.score + 1,
          totalScore: prev.totalScore + 1,
        }))
      } else {
        this.setState(prev => ({
          clickedEmoji: [...clickedEmoji, id],
          score: prev.score + 1,
          totalScore: prev.totalScore,
        }))
      }
    }

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    shuffledEmojisList()

    return (
      <div>
        <NavBar winning={won} lossing={lost} sc={score} tc={totalScore} />

        <div className="emojis-Container">
          <h1 className="seshGame">Sesh Games</h1>
          {!(won || lost) && (
            <ul className="emojis-sub-Container">
              {emojisList.map(each => (
                <EmojiCard key={each.id} fun={emojiClicked} cards={each} />
              ))}
            </ul>
          )}

          <div>
            <WinCard
              score={score}
              totalScore={totalScore}
              winning={won}
              lossing={lost}
              fun={this.playAgain}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
