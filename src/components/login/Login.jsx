import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
import {auth, db } from "../../lib/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload"

const Login = () => {

  const [avatar, setAvatar] = useState({
    file:  null,
    url:""
  });

  const hendleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true);

    const formData = new FormData(e.target)

    const {username, email, password} = Object.fromEntries(formData);
    
    try{

      const res = await createUserWithEmailAndPassword(auth,email,password);

      const imgUrl = await upload(avatar.file);


      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
  
      toast.success("Sikeres regisztráció!");

    }catch(err){
      console.log(err)
      toast.error("Valami hiba történt")
    }finally {
      setLoading(false)
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true);

    const formData = new FormData(e.target)

    const {email, password} = Object.fromEntries(formData);


    try{

    await signInWithEmailAndPassword(auth,email,password)

      toast.success("Rendben.")

    }catch(err)
    {
      toast.error("Valami hiba történt")
    }finally {
      setLoading(false)
    }
    
  };




  return (
    <div className="login">
      <div className="item">
        <h2>Üdvözlet</h2>
        <form  onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Jelszó" />
          <button
          disabled={loading}>{loading ? "Ellenörzés" : "Belépés"}</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
      <form  onSubmit={handleRegister} >
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"}/>
            Kép feltöltés</label>
          <input type="file" id="file" style={{display:"none"}}
          onChange={hendleAvatar} />
          <input type="text" name="username" placeholder="Felhasználónév" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Jelszó" />
          <button
          disabled={loading}>{loading ? "Ellenörzés" : "Regisztráció"}</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
