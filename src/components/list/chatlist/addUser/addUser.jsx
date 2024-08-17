import "./addUser.css";

const AddUser = () => {

    const handleSearch = async (e) => {
        e.preventDefault();
       
      };
    
    
  return (
    <div className="addUser">
        <form onSubmit={handleSearch}>
            <input type="text" name="usernsme" placeholder="Név" />
            <button>Keres</button>  
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png"/>
                <span>Valaki Valahol</span>
            </div>
            <button>Hozzáad</button>
        </div>
    </div>
  )
}

export default AddUser
