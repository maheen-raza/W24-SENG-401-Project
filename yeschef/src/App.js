import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import CreateAccount from "./CreateAccount/CreateAccount";
import SettingsPage from "./SettingsPage/SettingsPage"; 
import Search from "./Search/Search";
import SearchByTags from "./SearchByTags/SearchByTags"
import SearchByCategory from "./SearchByCategory/SearchByCategory";
import SearchByChef from "./SearchByChef/SearchByChef";
import SearchByIngredients from "./SearchByIngredients/SearchByIngredients";
import HomePage from "./HomePage/HomePage"


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={WebHome} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/searchbycategory" component={SearchByCategory} />
        <Route path="/searchbychef" component={SearchByChef} />
        <Route path="/searchbyingredients" component={SearchByIngredients} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/searchbytags" component={SearchByTags} />
        <Route path="/homepage" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
