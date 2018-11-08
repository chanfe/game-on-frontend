import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import ScorePage from './containers/ScorePage'
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SigninPage';
import GamePage from './containers/GamePage';
import Game2 from './containers/Game2';
import SecretPage from './containers/SecretPage';
import Welcome from './components/Welcome';


import { userLogin } from './actions/userActions'
import { loginUser } from './actions/userActions'
import { connect } from 'react-redux'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';





class App extends Component {

  componentDidMount() {
    console.log(localStorage.getItem("jwt"))
    this.props.userLogin();
  }
  render() {
    return (
      <Router>
          <React.Fragment>
            <NavBar />
            {this.props.login_user ? <Welcome user={this.props.login_user} /> : ""}
             <Switch>
                <Route exact path="/SignUp" render={(props) => <SignUpPage />}/>
                <Route exact path="/Login" render={(props) => <LoginPage />}/>
                <Route exact path="/Game" render={(props) => <GamePage />}/>
                <Route exact path="/Game2" render={(props) => <Game2 />}/>
                <Route exact path="/Score" render={(props) => <ScorePage />}/>
                <Route exact path="/Secret" render={(props) => <SecretPage />}/>
                <Route path="/" render={(props) => <LoginPage />} />
              </Switch>

          </React.Fragment>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.users,
    scores: state.scores,
    login_user: state.login_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: () => dispatch(userLogin()),
    loginUser: () => dispatch(loginUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
