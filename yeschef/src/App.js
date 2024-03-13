import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebHome from "./WebHome/WebHome"; 
import Login from "./Login/Login"; 
import CreateAccount from "./CreateAccount/CreateAccount";
import SearchByCategory from "./SearchByCategory/SearchByCategory"; 
import SearchByChef from "./SearchByChef/SearchByChef"; 
import SearchByIngredients from "./SearchByIngredients/SearchByIngredients";

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
      </div>
    </Router>
  );
}

export default App;
