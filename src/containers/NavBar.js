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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        </NavLink>
        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
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
