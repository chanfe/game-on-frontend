export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const updateUser = (user) => {
  return (dispatch) => {
    console.log("updating user")
    fetch(`${API_ROOT}/users/${user.id}`, {
      method: 'PATCH',
      headers: {HEADERS},
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(updatedUser => dispatch({type: 'EDIT_USER', payload: user}))
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    console.log("fetching user", dispatch)
    return fetch('http://localhost:3000/users/')
    .then(r => r.json())
    .then(allUsers => dispatch({type: 'LOAD_USERS', payload: allUsers}))
  }
}
