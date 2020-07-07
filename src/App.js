import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return(
        <div>
          <Router>
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/dashboard/:username" component={Dashboard} />}/>
              </Switch>
          </Router>
        </div>
    )
  }

}

export default App;
