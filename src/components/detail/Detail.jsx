import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
     <div className="user">
      <img src="./avatar.png" alt="" />
      <h2>Jane Doe</h2>
      <p>Ide is kell valami ami nem lorem.</p>
     </div>

     <div className="info">
      <div className="option">
        <div className="title">
          <span>Beállítások</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>

      <div className="option">
        <div className="title">
          <span>Adatvédelem</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>

      <div className="option">
        <div className="title">
          <span>Megosztott tartalmak</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photos">
        <div className="photoItem">
           <div className="photoDetail">
           <img src="https://kutyas.hatterkepek1.hu/kep/hatterkepek-kutyas_3.jpg"/>
           <span>Kép</span>
           </div>
           <img className="icon" src="./download.png" alt="" />
          </div>
        </div>
      </div>

      <div className="option">
        <div className="title">
          <span>Fiókok</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <button>Tiltás</button>
      <button className="logout" onClick={() => auth.signOut()}>Kijelentkezés</button>
     </div>
    </div>
  )
}

export default Detail
