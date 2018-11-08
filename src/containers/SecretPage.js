import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'
import ConversationsList from '../components/ConversationsList';
import { connect } from 'react-redux'

class LoginPage extends Component {

  constructor(props){
    super(props)

  }



  render(){
    return (
      <Segment>
        {this.props.secret ?
          <ConversationsList />
          : <LoginPage />
        }

      </Segment>
    );
  };
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    secret: state.secretPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
