import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/login" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/settings" element={<SettingsPage/>} /> */}
      </div>
    </Router>
  );
}

export default App;
