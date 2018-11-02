
export const updateUser = (user) => {
  return (dispatch) => {
    console.log("updating user")
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
