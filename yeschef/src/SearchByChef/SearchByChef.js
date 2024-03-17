import React from "react";
import "./SearchByChef.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";

function SearchByChef() {
    const [editableText, setEditableText] = useState('');

    const handleInputChange = (event) => {
        setEditableText(event.target.innerText);
    };
    return (
        <div className="searchbychef">
            <div className="div">
                <div className="home-button"><Link to="/homepage"><div className="text-wrapper-home-button">HOME</div></Link></div>
                <div className="search-button"><Link to="/search"><div className="text-wrapper-search-button">SEARCH</div></Link></div>
                <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
                <div className="settings-button"><Link to="/settings"><div className="text-wrapper-settings-button">SETTINGS</div></Link></div>
                <div className="container">
                    <div className="search-by-text">SEARCH BY</div>
                    <div className="chef-button">CHEF</div>
                    <input className="blank-space" ></input>
                </div>
                <div className="sort-text">SORT</div>
                <div className="by-text">BY</div>
                <div className="container2">
                    <div className="small-square square1"></div>
                    <div className="small-square square2"></div>
                    <div className="small-square square3"></div>
                    <div className="small-square square4"></div>
                    <div className="small-square square5"></div>
                    <div className="small-square square6"></div>
                    <div className="small-square square7"></div>
                    <div className="small-square square8"></div>
                </div>
                <div className="text-wrapper-5">YES,</div>
                <div className="text-wrapper-6">CHEF</div>
            </div>
        </div>
    );
}

export default SearchByChef;