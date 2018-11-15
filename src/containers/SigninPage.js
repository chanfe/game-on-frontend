import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment,Container } from 'semantic-ui-react'

import { newUser } from '../actions/userActions'
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
  componentDidMount(){
    if (this.props.login_user){
      this.props.history.push("/Score")
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
    const addUser = {user:{
      name:`${this.state.first_name} ${this.state.last_name}`,
      username:this.state.username,
      password:this.state.password,
      first_ending:false,
      second_ending:false,
      secret_ending:false,
      secret_place:false,
      secret_login:false,
      max_score_v1:false,
      max_score_v2:false
    }}

    let error = this.props.newUser(addUser)
    this.props.history.push("/");

  }




  render() {
    return (
      <Container>
        <Segment style={{margin:"2em"}}>
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
                <Button type='submit' primary style={{"padding-left": "44%","padding-right":"44%"}}>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    users: state.users,
    scores: state.scores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newUser: (user) => dispatch(newUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignPage)
