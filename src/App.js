import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import UserPage from './containers/UserPage';
import ScorePage from './containers/ScorePage'
import ScorePage2 from './containers/ScorePage2'
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SigninPage';
import GamePage from './containers/GamePage';
import Game2 from './containers/Game2';
import SecretPage from './containers/SecretPage';
import Welcome from './components/Welcome';
import history from './components/history'

import { userLogin } from './actions/userActions'
import { loginUser } from './actions/userActions'
import { connect } from 'react-redux'

import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, List, Container } from 'semantic-ui-react'



import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



const backredStyle = {
  background: "#8c1c11",
  overflow: "visible",
  position: "relative",
  height: "80px",
  "min-width": "1000px",
}
const grayBackground = {
  background: "#eeeeee"
}

const footer = {
  padding: "5em 5em",
  position: "relative",
  bottom: "0",
  left: "0",
  width: "100%",
}

class App extends Component {

  componentDidMount() {
    console.log(localStorage.getItem("jwt"))
    this.props.userLogin();
  }
  render() {
    return (
      <Router history = {history}>
          <React.Fragment>
            <div style={grayBackground}>
            <div style={backredStyle}>
              <NavBar />
              {this.props.login_user ? <Welcome user={this.props.login_user} /> : ""}
            </div>


             <Switch>
                <Route exact path="/User" render={(props) => <UserPage history={props.history}/>}/>
                <Route exact path="/SignUp" render={(props) => <SignUpPage history={props.history}/>}/>
                <Route exact path="/Login" render={(props) => <LoginPage history={props.history}/>}/>
                <Route exact path="/Game" render={(props) => <GamePage history={props.history}/>}/>
                <Route exact path="/Game2" render={(props) => <Game2 history={props.history}/>}/>
                <Route exact path="/Score" render={(props) => <ScorePage history={props.history}/>}/>
                <Route exact path="/Score2" render={(props) => <ScorePage2 history={props.history}/>}/>
                <Route exact path="/Secret" render={(props) => <SecretPage history={props.history}/>}/>
                <Route path="/" render={(props) => <LoginPage history={props.history}/>} />
              </Switch>

              <Segment inverted vertical style={footer}>
                <Container>
                  <Grid divided inverted stackable>
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                          <List.Item as='a'>Sitemap</List.Item>
                          <List.Item as='a'>Contact Us</List.Item>
                          <List.Item as='a'>Religious Ceremonies</List.Item>
                          <List.Item as='a'>Gazebo Plans</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                          <List.Item as='a'>Banana Pre-Order</List.Item>
                          <List.Item as='a'>DNA FAQ</List.Item>
                          <List.Item as='a'>How To Access</List.Item>
                          <List.Item as='a'>Favorite X-Men</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Header as='h4' inverted>
                          Felix was here
                        </Header>
                        <p>
                          Hi There
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Container>
              </Segment>
            </div>
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
