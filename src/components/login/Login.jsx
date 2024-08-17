import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="item">
        <h2>Üdvözlet</h2>
        <form /*  onSubmit={handleLogin} */>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Jelszó" />
          <button>Belépés</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
      <form /* onSubmit={handleRegister} */>
          <label htmlFor="file">
            <img src="./avatar.png"/>
            Kép feltöltés</label>
          <input type="file" id="file" style={{display:"none"}}
          /* onChange={hendleAvatar} */ />
          <input type="text" name="username" placeholder="Felhasználónév" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Jelszó" />
          <button
          /* disabled={loading} */>Regisztráció</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
