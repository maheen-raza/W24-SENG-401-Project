import React from "react";
import "./Search.css";


function Search() {
    return (
        <div className="search">
            <div className="div">
                <div className="group">
                    <div className="sort-by">SORT BY</div>
                    <div className="overlap"><div className="post-box-1"></div></div>
                </div>
                <div className="tag-search-bar">
                    <div className="search-text">SEARCH BY</div>
                    <div className="search-by-tag-button"><div className="text-wrapper-tags">TAG</div></div>
                    <div className="search-by-chef-button"><div className="text-wrapper-chefs">CHEF</div></div>
                    <div className="search-by-food-button"><div className="text-wrapper-food">FOOD</div></div>
                    <div className="search-by-ingredient-button"><div className="text-wrapper-ingredient">INGREDIENT</div></div>
                </div>
                <div className="home-button"><div className="text-wrapper-home-button">HOME</div></div>
                <div className="search-button"><div className="text-wrapper-search-button">SEARCH</div></div>
                <div className="settings-button"><div className="text-wrapper-settings-button">SETTINGS</div></div>
                <div className="profile-button"><div className="text-wrapper-profile-button">PROFILE</div></div>
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
