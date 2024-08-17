import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {

  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text,setText] = useState("");


  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  },  [])






  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

 
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Nem érdekelsz.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"/>
          <img src="./video.png" />
          <img src="./info.png" />
        </div>
      </div>

      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>Valami teszt szöveg.</p>
            <span>1 perce küldve</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png"/>
          <div className="texts">
            <p>Valami teszt szöveg.</p>
            <span>1 perce küldve</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Valami teszt szöveg.</p>
            <span>1 perce küldve</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png"/>
          <div className="texts">
            <p>Valami teszt szöveg.</p>
            <span>1 perce küldve</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
          <img src="https://kutyas.hatterkepek1.hu/kep/hatterkepek-kutyas_3.jpg"/>
            <span>1 perce küldve</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./microfon.png" alt="" />
        </div>
        <input 
        type="text"
         placeholder="Üzenet"
         value={text}
         onChange={(e) => setText(e.target.value)}
          />
        <div className="emoji">
        <img
         src="./emoji.png"
          onClick={() => setOpen((prev )=> !prev)} />
       <div className="picker">
       <EmojiPicker open={open} onEmojiClick={handleEmoji} />
       </div>
        </div>
        <button className="send">Küldés</button>
      </div>
    </div>
  
  )
}

export default Chat
