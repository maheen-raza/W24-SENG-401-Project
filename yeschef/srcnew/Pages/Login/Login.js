import "./Login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Login() {
    return (
        <div className="LoginPage">
            <div className="name">Yes, Chef</div>

            <div className="loginprompt">
                <div className="logintitle">LOGIN</div>
                <div className="Form">
                
                    <input class="input" placeholder="Username"/>
                
               
                    <input class="input" placeholder="Password"/>
                
                    <button  className="button-28">Login</button>
                    
                </div>
            </div>

            <div className="createlol">Dont have an account yet? <Link to="/createaccount" className="button-28">Create Account</Link></div>

        </div>
    );
}

export default Login;
