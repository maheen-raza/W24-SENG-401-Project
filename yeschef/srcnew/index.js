import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"; 
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import Test from "./Pages/testpages/Test";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import Profile from "./Pages/Profile/Profile";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        {" "}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
