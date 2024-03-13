import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import CreateAccount from "./CreateAccount/CreateAccount";
import SettingsPage from "./SettingsPage/SettingsPage"; 
import Search from "./Search/Search";
import SearchByTags from "./SearchByTags/SearchByTags"


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={WebHome} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/searchbytags" component={SearchByTags} />
      </div>
    </Router>
  );
}

export default App;
