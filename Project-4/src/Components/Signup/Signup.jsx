import './Signup.css'
import { MdOutlinePersonAddAlt } from "react-icons/md";
function Signup() {
  return (
    <div id='signup'>
         

            <form onSubmit={(event) => { alert("Sign Up Successfully"); event.preventDefault(); }}>
                <div className="title">
                    <span id='signuptitle'>Sign Up Page</span>
                </div>

                <div className="inputfield">
                    <div className="list">
                    <label htmlFor="name">UserName</label>
                    <input type="text" id='name' required />
                </div>

                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' required />
                </div>

                <div className='list'>
                    <label htmlFor="setpass">Set Password</label>
                    <input type="password" id='setpass' required />
                </div>
                <div className='list'>
                    <label htmlFor="confirmpass">Conform Password</label>
                    <input type="password" id='confirmpass' required />
                </div>
                </div>

                <button id='signupbtn'>Sign Up <MdOutlinePersonAddAlt/></button>
            </form>
        </div>
    
  )
}

export default Signup