// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {EmojiDetails, changeEmoji} = props
  const {emojiName, emojiUrl, id} = EmojiDetails

  const onChangeEmoji = () => {
    changeEmoji(id)
  }

  return (
    <li>
      <button
        type="button"
        className="each-logo-container"
        onClick={onChangeEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
