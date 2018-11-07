import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'

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

  handleLoginModal = () =>{
    console.log(this.state)
    this.login(this.state.username, this.state.password);
  }

  login = (username, password) =>{
    fetch('http://localhost:3000/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => res.json())
    .then(resp => {
        console.log("responce from login ",resp)
        if (resp.error) {
          this.setState({ error: resp.error });
        } else {
          this.props.handleLogin(resp);
          this.props.handleLoginClick();
        }
      });
  }


  render(){
    return (
      <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field value={this.state.username} onChange={this.handleUserName}>
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

export default LoginPage;
