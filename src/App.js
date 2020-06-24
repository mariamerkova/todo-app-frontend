import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render() {
    return(
        <div>
          <Router>
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/loginPage" component={LoginPage}/>
              </Switch>
          </Router>
        </div>
    )
  }

}

export default App;
