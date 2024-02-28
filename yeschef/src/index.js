import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebHome from "./WebHome/WebHome";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals"; // Add this line

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<WebHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
