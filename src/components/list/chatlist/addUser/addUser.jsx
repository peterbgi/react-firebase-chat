import { toast } from "react-toastify";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";

const AddUser = () => {

    const [user, setUser] = useState(null);

    const handleSearch = async (e) => {


        e.preventDefault();
        
        const formData = new FormData(e.target)
        const username = formData.get("username")

        try{
            const userRef = collection(db, "users");

            const q = query(userRef, where("username", "==", username));
      
            const querySnapShot = await getDocs(q);
      
            if (!querySnapShot.empty) {
              setUser(querySnapShot.docs[0].data());
            }

        }catch(err)
        {
            console.log(err)
            toast.error("Hiba..")
        }
       
      };

      
    
    
    
  return (
    <div className="addUser">
        <form onSubmit={handleSearch}>
            <input type="text" name="username" placeholder="Név" />
            <button>Keres</button>  
        </form>
        {user &&  <div className="user">
            <div className="detail">
                <img src={user.avatar || "./avatar.png"}/>
                <span>{user.username}</span>
            </div>
            <button>Hozzáad</button>
        </div>}
       
    </div>
  )
}

export default AddUser
