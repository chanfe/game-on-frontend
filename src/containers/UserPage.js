import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container } from 'semantic-ui-react'

import { loginUser } from '../actions/userActions'
import { loadUser } from '../actions/userActions'
import { connect } from 'react-redux'

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
    // add better Achievements here
    return (
      <Container textAlign='center'>
        <Segment style={{padding:"1em"}}>
          <h1>Achievements!</h1>
        </Segment>

        <h2>name:{name}</h2>

        <h2>escaped?:{first_ending ? "congras you got this" : "you did not got this yet"}</h2>
        <h2>secret_login:{secret_login? "congras you got this" : "you did not got this yet"}</h2>
        <h2>max_score_v1:{max_score_v1? "congras you got this" : "you did not got this yet"}</h2>
        <h2>max_score_v2:{max_score_v2? "congras you got this" : "you did not got this yet"}</h2>

      </Container>
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
