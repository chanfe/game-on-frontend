import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { setSecret } from '../actions/secretAction'


class NavBar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.props.logoutUser()
    this.props.setSecret(false)
    console.log("Logouted");
  };

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
        <NavLink to="/Secret">
          <Menu.Item name='secret' active={activeItem === 'secret'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/Login">
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
        </NavLink>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    setSecret: (secret) => dispatch(setSecret(secret))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
