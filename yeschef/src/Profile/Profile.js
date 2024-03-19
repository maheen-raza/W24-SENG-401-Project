import React from "react";
import "./SearchByChef.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";

function SearchByChef() {
    return (
        <div className="searchbychef">
            <div className="div">
                <div className="home-button"><Link to="/homepage"><div className="text-wrapper-home-button">HOME</div></Link></div>
                <div className="search-button"><Link to="/search"><div className="text-wrapper-search-button">SEARCH</div></Link></div>
                <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
                <div className="settings-button"><Link to="/settings"><div className="text-wrapper-settings-button">SETTINGS</div></Link></div>
                <div className="container2">
                    {/* Small Square 1 with Image */}
                    <div className="small-square">
                        <div className="image-text">Name</div>
                        <img className="square-image" src="" alt="Small square 1" />
                        <div className="contact-info">Contact Information</div> {/* Added contact info */}
                    </div>
                    <div className="right-side">
                        <h2>Name of The Profile</h2>
                        <p>This is a sample description. You can replace it with your actual content.</p>
                    </div>
                </div>

                <div className="text-wrapper-5">YES,</div>
                <div className="text-wrapper-6">CHEF</div>
            </div>
        </div>
    );
}

export default SearchByChef;
