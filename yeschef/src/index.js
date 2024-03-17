import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"; 
import CreateAccount from "./CreateAccount/CreateAccount";
import SearchByCategory from "./SearchByCategory/SearchByCategory";
import SearchByChef from "./SearchByChef/SearchByChef";
import SearchByIngredients from "./SearchByIngredients/SearchByIngredients";
import SettingsPage from "./SettingsPage/SettingsPage"; 
import Search from "./Search/Search";
import SearchByTags from "./SearchByTags/SearchByTags"
import HomePage from "./HomePage/HomePage"
import "@fontsource/rozha-one"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        {" "}
        <Route path="/" element={<WebHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/searchbycategory" element={<SearchByCategory/>} />
        <Route path="/searchbychef" element={<SearchByChef/>} />
        <Route path="/searchbyingredients" element={<SearchByIngredients/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/searchbytags" element={<SearchByTags/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
