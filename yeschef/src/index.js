import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"; 
import CreateAccount from "./CreateAccount/CreateAccount";
import SettingsPage from "./SettingsPage/SettingsPage"; 
import Search from "./Search/Search";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        {" "}
        <Route path="/" element={<WebHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
