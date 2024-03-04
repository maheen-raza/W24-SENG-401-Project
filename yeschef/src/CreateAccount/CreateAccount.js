import "./CreateAccount.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import React from "react";

function CreateAccount() {
    return (
        <div className="create-account">
            <div className="div">
                <div className="group">
                    <div className="overlap">
                        <div className="text-wrapper">ENTER A PASSWORD</div>
                        <div className="input-wrapper-1"></div> 
                        <div className="overlap-group">
                            <Link to="/settings">
                                <div className="create-account-text">CREATE AN ACCOUNT</div>
                            </Link>
                        </div>
                        <div className="text-wrapper-2">CREATE ACCOUNT</div>
                        <div className="overlap-group-warpper">
                        </div>
                        <div className="text-wrapper-7">ENTER AN EMAIL</div>
                        <div className="input-wrapper-3"></div>
                        <div className="text-wrapper-4">ENTER A USERNAME</div>
                        <div className="input-wrapper-2"></div>
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <div className="text-wrapper-5">YES,</div>
                        <div className="text-wrapper-6">CHEF</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
