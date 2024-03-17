import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebHome from "./WebHome/WebHome";
import Login from "./Login/Login";
import CreateAccount from "./CreateAccount/CreateAccount";
//import SettingsPage from "./SettingsPage/SettingsPage"; <Route path="/settings" component={SettingsPage} />

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={WebHome} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
      </div>
    </Router>
  );
}

export default App;
