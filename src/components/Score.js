import React from 'react';
import { connect } from 'react-redux';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


const score = (props) =>{
  return(
    <Table.Row>
      <Table.Cell>{props.user ? props.user.username : props.score.user_id}</Table.Cell>
      <Table.Cell>{props.score.points}</Table.Cell>
    </Table.Row>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    // selected: state.selectedUser.id === ownProps.user.id
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    selectScore: (score) => dispatch({type: 'SELECT_SCORE', payload: score })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(score)
