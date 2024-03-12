import React from "react";
import "./Search.css";

/*
function Search() {
    return (
        <div className="search">
            <div className="div">
                <div className="group">
                    <div className="overlap-group">
                        <div className="home-button"><div className="text-wrapper-home-button">HOME</div></div>
                        <div className="search-button"><div className="text-wrapper-search-button">SEARCH</div></div>
                        <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
                        <div className="settings-button"><div className="text-wrapper-settings-button">SETTINGS</div></div>
                            <div className="log-out">LOG OUT</div>
                    </div>
                    <div className="sort-by">SORT BY</div>
                </div>
                <div className="tag-search-bar">
                    <div className="search-text">SEARCH BY</div>
                    <div className="search-by-tag-button"><div className="text-wrapper-tags">TAG</div></div>
                    <div className="search-by-chef-button"><div className="text-wrapper-chefs">CHEF</div></div>
                    <div className="search-by-food-button"><div className="text-wrapper-food">FOOD</div></div>
                    <div className="search-by-ingredient-button"><div className="text-wrapper-ingredient">INGREDIENT</div></div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <div className="text-wrapper-5">YES,</div>
                        <div className="text-wrapper-6">CHEF</div>
                    </div>
                </div>
                <div class="container">
                    <div class="small-square square1"></div>
                    <div class="small-square square2"></div>
                    <div class="small-square square3"></div>
                    <div class="small-square square4"></div>
                    <div class="small-square square5"></div>
                    <div class="small-square square6"></div>
                    <div class="small-square square7"></div>
                    <div class="small-square square8"></div>
                </div>
            </div>
        </div>
    );
}

export default Search;

*/

function Search() {
    return (
        <div className="search">
            <div className="div">
            <div className="home-button"><div className="text-wrapper-home-button">HOME</div></div>
            <div className="search-button"><div className="text-wrapper-search-button">SEARCH</div></div>
            <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
            <div className="settings-button"><div className="text-wrapper-settings-button">SETTINGS</div></div>
                <div className="group">
                    <div className="tag-search-bar">
                        <div className="search-text">SEARCH BY</div>
                        <div className="search-by-tag-button"><div className="text-wrapper-tags">TAG</div></div>
                        <div className="search-by-chef-button"><div className="text-wrapper-chefs">CHEF</div></div>
                        <div className="search-by-food-button"><div className="text-wrapper-food">FOOD</div></div>
                        <div className="search-by-ingredient-button"><div className="text-wrapper-ingredient">INGREDIENT</div></div>
                    </div>
                    <div className="overlap">
                        <div className="overlap-group">
                            <div className="container">
                                <div class="small-square square1"></div>
                                <div class="small-square square2"></div>
                                <div class="small-square square3"></div>
                                <div class="small-square square4"></div>
                                <div class="small-square square5"></div>
                                <div class="small-square square6"></div>
                                <div class="small-square square7"></div>
                                <div class="small-square square8"></div>
                            </div>
                        </div>
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

export default Search;
