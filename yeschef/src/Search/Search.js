import React from "react";
import "./Search.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Search() {
    return (
        <div className="search">
            <div className="div">
                <div className="home-button"><Link to="/homepage"><div className="text-wrapper-home-button">HOME</div></Link></div>
                <div className="search-button"><div className="text-wrapper-search-button">SEARCH</div></div>
                <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
                <div className="settings-button"><Link to="/settings"><div className="text-wrapper-settings-button">SETTINGS</div></Link></div>
                <div className="container">
                    <div className="search-by-text">SEARCH BY</div>
                    <Link to="/searchbytags"><button className="tags-button">TAGS</button></Link>
                    <button className="chef-button">CHEF</button>
                    <button className="food-button">FOOD</button>
                    <button className="ingredient-button">INGREDIENTS</button>
                </div>
                <div className="sort-text">SORT</div>
                <div className="by-text">BY</div>
                <div className="container2">
                    <div class="small-square square1"></div>
                    <div class="small-square square2"></div>
                    <div class="small-square square3"></div>
                    <div class="small-square square4"></div>
                    <div class="small-square square5"></div>
                    <div class="small-square square6"></div>
                    <div class="small-square square7"></div>
                    <div class="small-square square8"></div>
                </div>
                <div className="text-wrapper-5">YES,</div>
                <div className="text-wrapper-6">CHEF</div>
            </div>
        </div>
    );
}

export default Search;