import { useState } from "react"
import "./chatlist.css"

const ChatList = () => {

  const [addMode, setAddMode] = useState(false)

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" />
          <input type="text" placeholder="Keresés" />
        </div>
        <img className="add" src={addMode ? "./minus.png" : "./plus.png"} 
        onClick={() => setAddMode((prev) => !prev)}/>
      </div>

      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>

      
      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>

      
      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>

      
      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>

      
      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>

      
      <div className="item">
        <img src="./avatar.png"/>
        <div className="texts">
          <span>Jane Doe</span>
          <p>Szia Jane vagyok.</p>
        </div>
      </div>










    </div>
  )
}

export default ChatList
