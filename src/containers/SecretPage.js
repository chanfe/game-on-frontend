import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'
import ConversationsList from '../components/ConversationsList';
import SecretLogin from '../components/SecretLogin';

import { connect } from 'react-redux'

class SecretPage extends Component {

  constructor(props){
    super(props)

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
    secret: state.secretPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretPage);
