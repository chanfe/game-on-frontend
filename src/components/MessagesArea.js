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
        <div className="messagesArea" style={{margin: "1em"}}>
          <Modal.Header><h1>{title}</h1></Modal.Header>
            <Modal.Content>
              <Modal.Description>
                {this.orderedMessages(messages)}
              </Modal.Description>
            </Modal.Content>
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
      return <Message key={message.id}>{message.text}</Message>;
    });
  };
}

// helpers


export default MessagesArea;
