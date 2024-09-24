import './index.css'

const EmojiCard = props => {
  const {fun, cards} = props
  const {emojiName, id, emojiUrl} = cards
  const clicked = () => {
    fun(id)
  }
  return (
    <li>
      <button onClick={clicked} className="btn" type="button">
        <img className="card single-Card-img" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
