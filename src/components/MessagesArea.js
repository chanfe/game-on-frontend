import React from 'react';
import NewMessageForm from './NewMessageForm';
import { Button, Header, Image, Modal, Icon, Form, Checkbox, Message } from 'semantic-ui-react'

class MessagesArea extends React.Component{


  constructor(props) {
    super(props);
  }

  render(){
    const {id, title, messages} = this.props.conversation;
    return (
      <Modal open={this.props.open} >
        <div className="messagesArea">
          <Modal.Header><h1>{title}</h1></Modal.Header>
          <ul>{this.orderedMessages(messages)}</ul>
          <NewMessageForm conversation_id={id} />
        </div>
        <Modal.Actions>
          <Button color='red' onClick={this.props.handleModal}>
            <Icon name='remove' /> Exit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  orderedMessages(messages){
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
      return <li key={message.id}>{message.text}</li>;
    });
  };
}

// helpers


export default MessagesArea;
