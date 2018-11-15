import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { setSecret } from '../actions/secretAction'

const imgStyle = {
  height: "40px",
  "padding-left": "1rem",
  "padding-right": "3rem"
}

const redStyle = {
  background: "#8c1c11",
};

const whiteText = {
  background:"#681109",
  color: "white",

}

const menuPadding = {
  "padding": "1rem"
}


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
      <Menu floated="right" style={menuPadding}>
        <img src="./Images/nexe.png" style={imgStyle}/>
        <NavLink to="/Score">
          <Menu.Item style={whiteText} name='score' active={activeItem === 'score'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/Score2">
          <Menu.Item style={whiteText} name='score2' active={activeItem === 'score2'} onClick={this.handleItemClick} />
        </NavLink>
        {!this.props.login_user ? (
          <React.Fragment>
            <NavLink to="/Login">
              <Menu.Item style={whiteText} name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/SignUp">
              <Menu.Item style={whiteText} name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
            </NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink to="/User">
              <Menu.Item style={whiteText} name='user' active={activeItem === 'user'} onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/Game">
              <Menu.Item style={whiteText} name='game' active={activeItem === 'game'} onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/Game2">
              <Menu.Item style={whiteText} name='game2' active={activeItem === 'game2'} onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/Secret">
              <Menu.Item style={whiteText} name='secret' active={activeItem === 'secret'} onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/Login">
              <Menu.Item style={whiteText} name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
            </NavLink>
          </React.Fragment>
        )}
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
    login_user: state.login_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    setSecret: (secret) => dispatch(setSecret(secret))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
