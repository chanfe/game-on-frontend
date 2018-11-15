import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

import { Button, Header, Image, Modal, Icon, Form, Checkbox, Message, Container, Segment  } from 'semantic-ui-react'


class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null,
    visable: false
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };

  handleModal = () => this.setState({ visable: !this.state.visable })


  render = () => {
    const { conversations, activeConversation } = this.state;
    return (

      <Container className="conversationsList" style={{margin: "1em"}}>
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Conversations</h2>
        <ul>{mapConversations(conversations, this.handleClick, this.handleModal)}</ul>
        <NewConversationForm />
        {activeConversation ? (
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
            open={this.state.visable}
            handleModal={this.handleModal}
          />
        ) : null}
      </Container>
    );
  };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick, handleModal) => {
  return conversations.map(conversation => {
    return (
      <div>
      <Button key={conversation.id} style={{width: "100%"}} onClick={() => {
        handleClick(conversation.id)
        handleModal()
      }}>
        {conversation.title}
      </Button>
      </div>
    );
  });
};
