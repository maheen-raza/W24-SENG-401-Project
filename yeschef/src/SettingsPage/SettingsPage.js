import React from "react";
import "./SettingsPage.css";


function SettingsPage() {
    return (
        <div className="settings">
            <div className="div">
                <div className="group">
                    <div className="overlap">
                        <div className="overlap-group">
                            <div className="log-out">LOG OUT</div>
                        </div>
                        <div className="text-wrapper-2">SETTINGS</div>
                        <div className="overlap-group-warpper">
                        </div>
                        <div className="input-wrapper-1"><div className="text-wrapper-3">CHANGE USERNAME</div></div> 
                        <div className="input-wrapper-2"><div className="text-wrapper-4">CHANGE PASSWORD</div></div>
                        <div className="input-wrapper-3"><div className="text-wrapper-7">CHANGE EMAIL</div></div>
                        <div className="input-wrapper-4"><div className="text-wrapper-8">CHANGE VISIBILITY</div></div>
                        <div className="input-wrapper-5"><div className="text-wrapper-9">DELETE ACCOUNT</div></div>
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

export default SettingsPage;
