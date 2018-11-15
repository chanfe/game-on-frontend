import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container, Card } from 'semantic-ui-react'

import { loginUser } from '../actions/userActions'
import { loadUser } from '../actions/userActions'
import { connect } from 'react-redux'

import AchievementCard from '../components/AchievementCard'

const grayScale = {
  "-webkit-filter": "grayscale(100%)",
  filter: "grayscale(100%)",
  height:"5em"
}

class UserPage extends Component {

  constructor(props){
    super(props)
    this.state ={
    }
  }

  componentDidMount(){
    if (this.props.login_user){
      this.props.loadUser(this.props.login_user.id)
    }
    else{
      this.props.history.push("/Score")
    }
  }

  render(){
    console.log(this.props.user_achievements)
    const {name,first_ending,second_ending,secret_ending,secret_place,secret_login,max_score_v1,max_score_v2} = this.props.user_achievements;
    return (
    <React.Fragment>
      <Container textAlign='center'>
        <Segment style={{padding:"1em"}}>
          <h1>Achievements!</h1>
        </Segment>
      </Container>
      <Container>
        <h2>{name}{"'s \"Achievements\""}</h2>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={2}>
              {first_ending ? <Image src="./Images/escaped.png" style={{height:"5em"}}/> : <Image src="./Images/escaped.png" style={grayScale}/>}
            </Grid.Column>
            <Grid.Column width={14}>
              <Header>Escaped? Achievement </Header>
              <p>Finished the first game</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              {(secret_login) ? <Image src="./Images/unlocked.png" style={{height:"5em"}}/> : <Image src="./Images/locked.png" style={{height:"5em"}}/>}
            </Grid.Column>
            <Grid.Column width={14}>
              <Header>secret_login? Achievement </Header>
              <p>Login in the Secret Page</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              {max_score_v1 ? <Image src="./Images/Star_Coin.png" style={{height:"5em"}}/> : <Image src="./Images/Star_Coin.png" style={grayScale}/>}
            </Grid.Column>
            <Grid.Column width={14}>
              <Header>Maximum Coinage Achievement </Header>
              <p>Gather the maximum amount of coins in the first game!</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              {max_score_v2 ? <Image src="./Images/Coins2.png" style={{height:"5em"}}/> : <Image src="./Images/Coins2.png" style={grayScale}/>}
            </Grid.Column>
            <Grid.Column width={14}>
              <Header>Game2 - Maximum Points Achievement!! </Header>
              <p>Gather the maximum amount of points in the second game.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    login_user:state.login_user,
    user_achievements: state.user_achievements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    loadUser: (user) => dispatch(loadUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
