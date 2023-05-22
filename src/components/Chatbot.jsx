import Chatbox from '@/utils/chatbot'
import { useLayoutEffect } from 'react'

function Chatbot({}) {
  useLayoutEffect(() => {
    const chatbox = new Chatbox()
    chatbox.display()
  }, [])

  return (
    <div className="chatbox">
      <div className="chatbox__support">
        <div className="chatbox__header">
          <div className="chatbox__image--header">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
              alt="image"
            />
          </div>
          <div className="chatbox__content--header">
            <h4 className="chatbox__heading--header">Chat support</h4>
            <p className="chatbox__description--header">
              Hi. My name is Sam. How can I help you?
            </p>
          </div>
        </div>
        <div className="chatbox__messages">
          <div></div>
        </div>
        <div className="chatbox__footer">
          <input type="text" placeholder="Write a message..." />
          <button className="chatbox__send--footer send__button">Send</button>
        </div>
      </div>
      <div className="chatbox__button">
        <button>
          <img src="/chatbox-icon.svg" />
        </button>
      </div>
    </div>
  )
}

export default Chatbot
