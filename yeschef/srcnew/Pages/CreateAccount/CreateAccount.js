import "./CreateAccount.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function CreateAccount() {
    return (
        <div className="LoginPage">
            <div className="name">Yes, Chef</div>

            <div className="loginprompt">
                <div className="logintitle">Create Account</div>
                <div className="Form">
                
                    <input class="input" placeholder="Enter Email"/>
                
               
                    <input class="input" placeholder="Enter Username"/>
                
               
                    <input class="input" placeholder="Enter Password"/>
                
                    <button  className="button-28">Create account</button>
                </div>
            </div>

            <div className="createlol">Already have an account?  <Link to="/login" className="button-28">Login</Link></div>


        </div>
    );
}

export default CreateAccount;
