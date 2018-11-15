import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'
import ConversationsList from '../components/ConversationsList';
import SecretLogin from '../components/SecretLogin';

import { updateUser } from '../actions/userActions'

import { connect } from 'react-redux'

class SecretPage extends Component {

  constructor(props){
    super(props)

  }
  componentDidMount(){
    if (!this.props.login_user){
      this.props.history.push("/Score")
    }
    else{
      const data = {
        "id":this.props.login_user.id,
        "secret_login":this.props.secret,
      }

      console.log("data", data)
      this.props.updateUser(data);
    }

  }

  render(){
    return (
      <div>
        {this.props.secret ?
          <ConversationsList />
          : <SecretLogin />
        }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    secret: state.secretPassword,
    login_user: state.login_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser:(data) => dispatch(updateUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretPage);
