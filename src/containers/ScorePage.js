import React, { Component } from 'react'
import { Icon, Label, Menu, Table, Container } from 'semantic-ui-react'
import Score from '../components/Score'

import { loadUsers } from '../actions/userActions'
import { loadScores } from '../actions/scoreActions'
import { connect } from 'react-redux'

class ScorePage extends Component{
  componentDidMount() {
    this.props.loadUsers()
    this.props.loadScores()
  }

  render() {
    const highScore = this.props.scores.sort(function(a, b){return b.points - a.points})

    const eachScore = highScore.map(score => {
      const scoreUser = this.props.users.find(user => {
        return score.user_id == user.id})
      return <Score key={score.id} score={score} user={scoreUser}/>
    });

    return(
      <Container>
      <h1>Hi - Score</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Player name</Table.HeaderCell>
            <Table.HeaderCell>score</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {eachScore}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon className='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon className='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    scores: state.scores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers()),
    loadScores: () => dispatch(loadScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorePage)
