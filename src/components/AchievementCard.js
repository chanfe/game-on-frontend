import React from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react'


const AchievementCard = (props) =>{
  return(
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='left' src={props.image} />
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    // selected: state.selectedUser.id === ownProps.user.id
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementCard)
