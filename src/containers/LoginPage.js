import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'

import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'

class LoginPage extends Component {

  constructor(props){
    super(props)
    this.state ={
      error:null,
      username:"",
      password:""
    }
  }

  handleUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = () =>{
    console.log("yoh", this.state.username, this.state.password)
    this.props.loginUser(this.state.username, this.state.password);
  }



  render(){
    return (
      <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field value={this.state.username} onChange={this.handleUsername}>
              <label>Username</label>
              <input placeholder='Username' />
              </Form.Field>
              <Form.Field type='password' value={this.state.password} onChange={this.handlePassword}>
              <label>Password</label>
              <input placeholder='Password' type='password'/>
              </Form.Field>
              <Button type='submit' floated='right'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  };
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.users,
    scores: state.scores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
