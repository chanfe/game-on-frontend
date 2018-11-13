import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'

import { setSecret } from '../actions/secretAction'
import { connect } from 'react-redux'

class SecretLogin extends Component {

  constructor(props){
    super(props)
    this.state ={
      error:null,
      password:""
    }
  }

  handlePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) =>{
    if(this.state.password == "LOSST"){
      this.props.setSecret(true)
    }
    else{
      this.setState({
        password: ""
      })
    }
  }



  render(){
    return (
      <Segment>
        <Image src='./Images/n-in-circle.jpg' centered/>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field type='password' value={this.state.password} onChange={this.handlePassword}>
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
  return {
    secretPassword: state.secretPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSecret: (secret) => dispatch(setSecret(secret))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SecretLogin)
