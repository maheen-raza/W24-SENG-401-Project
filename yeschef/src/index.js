import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"; 
import CreateAccount from "./CreateAccount/CreateAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<WebHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
