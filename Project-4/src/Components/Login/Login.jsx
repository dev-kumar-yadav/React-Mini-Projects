
import './Login.css'
import { MdLogin } from "react-icons/md";
function Login() {
    return (
        <div id='login'>

            <form onSubmit={(event) => { alert("Login Successfully"); event.preventDefault(); }}>
                <div className="title">
                    <span id='logintitle'>Login Page</span>
                </div>
                <div className="inputfield">
                    <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' required />

                </div>
                <div className='list'>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' required />
                </div>
                </div>
                <button id='loginbtn'>Login <MdLogin/></button>
            </form>
        </div>
    )
}

export default Login