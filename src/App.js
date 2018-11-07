import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import ScorePage from './containers/ScorePage'
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SigninPage';
import GamePage from './containers/GamePage';
import Game2 from './containers/Game2';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            <NavBar />
             <Switch>
                <Route exact path="/SignUp" render={(props) => <SignUpPage />}/>
                <Route exact path="/Login" render={(props) => <LoginPage />}/>
                <Route exact path="/Game" render={(props) => <GamePage />}/>
                <Route exact path="/Game2" render={(props) => <Game2 />}/>
                <Route exact path="/Score" render={(props) => <ScorePage />}/>
                <Route path="/" render={(props) => <LoginPage />} />
              </Switch>

          </React.Fragment>
        </Router>
    );
  }
}

export default App;
