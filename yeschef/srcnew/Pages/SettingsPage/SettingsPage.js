import React from "react";
import "./SettingsPage.css";
import Header from '../../Components/Header/Header'

function SettingsPage() {
    return (
        <div className="settingspage">
            <Header />
            <div className="settingsstuff">
            <div className="settingsprompt">
                <div className="settingstitle">SETTINGS</div>
                <div className="settingsbuttons">
                    <div  className="button-28">Change Username</div>
                    <div  className="button-28">Change Password</div>
                    <div  className="button-28">Change Email</div>
                    <div  className="button-28">Change Visibility</div>
                    <div  className="button-28">Delete accont</div>
                    <div className="marginlol"></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SettingsPage;
