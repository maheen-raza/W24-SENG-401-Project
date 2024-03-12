import React from "react";
import "./Search.css";

function Search() {
    return (
        <div className="search">
            <div className="div">
                <div className="home-button"><div className="text-wrapper-home-button">HOME</div></div>
                <div className="search-button"><div className="text-wrapper-search-button">SEARCH</div></div>
                <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
                <div className="settings-button"><div className="text-wrapper-settings-button">SETTINGS</div></div>
                <div className="container">
                    <div className="search-by-text">SEARCH BY</div>
                    <div className="tags-button">TAGS</div>
                    <div className="chef-button">CHEF</div>
                    <div className="food-button">FOOD</div>
                    <div className="ingredient-button">INGREDIENTS</div>
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