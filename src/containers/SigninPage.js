import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'

import { loadUsers } from '../actions/userActions'
import { loadScores } from '../actions/scoreActions'
import { connect } from 'react-redux'


class SignPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      username:"",
      password:"",
      term:false
    }
  }

  handleFirstName = (event) => {
    this.setState({
      first_name: event.target.value
    })
  }
  handleLastName = (event) => {
    this.setState({
      last_name: event.target.value
    })
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleTermsAndConditions = () =>{
    this.setState({
      term: !this.state.term
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name:`${this.state.first_name} ${this.state.last_name}`,
      username:this.state.username,
      password:this.state.password
    }
    let error = this.props.onSignUp(newUser)
    console.log(error)
    error ? alert("username is taken") : this.props.history.push("/");

  }
  onSignUp = (user) => {
    fetch('http://localhost:3000/hosts/', {
      method: "POST",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
      body: JSON.stringify({
        "name":user.name,
        "username":user.username,
        "password":user.password,
      }),
    }).then(res => res.json()).then(console.log)
    fetch('http://localhost:3000/renters/', {
      method: "POST",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
      body: JSON.stringify({
        "name":user.name,
        "username":user.username,
      }),
    }).then(res => res.json()).then(console.log)
  }



  render() {
    return (
      <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field value={this.state.first_name} onChange={this.handleFirstName}>
              <label>First Name</label>
              <input placeholder='First Name' />
              </Form.Field>
              <Form.Field value={this.state.last_name} onChange={this.handleLastName}>
              <label>Last Name</label>
              <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field value={this.state.username} onChange={this.handleUserName}>
              <label>Username</label>
              <input placeholder='Username' />
              </Form.Field>
              <Form.Field type='password' value={this.state.password} onChange={this.handlePassword}>
              <label>Password</label>
              <input placeholder='Password' type='password'/>
              </Form.Field>
              <Form.Field value={this.state.term} onClick={this.handleTermsAndConditions}>
              <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit' floated='right'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
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
    loadUsers: () => dispatch(loadUsers()),
    loadScores: () => dispatch(loadScores())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignPage)
