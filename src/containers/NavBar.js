import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NavBar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.props

    return (
      <Menu tabular>
        <NavLink to="/Score">
          <Menu.Item name='score' active={activeItem === 'score'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/Login">
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/SignUp">
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/Game">
          <Menu.Item name='game' active={activeItem === 'game'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/Game2">
          <Menu.Item name='game2' active={activeItem === 'game2'} onClick={this.handleItemClick} />
        </NavLink>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    activeItem: state.activeItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
