export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export const updateUser = (user) => {
  return (dispatch) => {
    console.log("updating user")
    fetch(`${API_ROOT}/users/${user.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(updatedUser => dispatch({type: 'EDIT_USER', payload: user}))
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    console.log("fetching user", dispatch)
    return fetch(`${API_ROOT}/users/`)
    .then(r => r.json())
    .then(allUsers => dispatch({type: 'LOAD_USERS', payload: allUsers}))
  }
}

export const newUser = (user) => {
  return (dispatch) => {
    console.log("createing new user", dispatch, user)
    return fetch(`${API_ROOT}/users/`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(newUser => dispatch({type: 'NEW_USER', payload: user}))
  }
}

export const userLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch(`${API_ROOT}/current_user`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        }
      })
        .then(resp => resp.json())
        .then(user => dispatch({type: 'LOGIN', payload: user}))
    }
  }
}

export const loginUser = (username, password) => {
  console.log("hay",username, password);
  return (dispatch) => {
    fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
      .then(resp => {
          console.log("responce from login ",resp)
          if (resp.error) {
            alert(resp.error);
          } else {
            localStorage.setItem("jwt", resp.jwt);
            console.log("jwt code",resp.jwt)

            fetch("http://localhost:3000/current_user", {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: resp.jwt
              }
            })
              .then(resp => resp.json())
              .then(user => dispatch({type: 'LOGIN', payload: user}))
          }
      });
    }
}
