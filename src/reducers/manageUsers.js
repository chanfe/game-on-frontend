const initState = {
  messages: [],
  message: "temp",
  login_user: null,
  users: [],
  scores: [],
  selectedUser: {},
  selectedScore: {},
  activeItem:"bio",
  secretPassword: false,
  user_achievements:{}
}

export default function manageUsers (state = initState, action) {
  switch (action.type) {

    case ('LOAD_USERS'): {
      return {...state, users: action.payload}
    }

    case ('LOAD_USER'): {
      return {...state, user_achievements: action.payload}
    }

    case 'ADD_USER':
      console.log("in add user")
      return {
        ...state,
        users: [ ...state.users]
      }
    case 'NEW_USER':
      console.log("new user")
      return {
        ...state,
        login_user: action.payload
      }

    case ('SELECT_USER'): {
      return {...state, selectedUser: action.payload}
    }

    case('LOGIN'): {
      return {...state, login_user: action.payload}
    }

    case('LOGOUT'): {
      return {...state, login_user: null}
    }

    case ('EDIT_USER'): {
      // replaces old hobbit object with shiny new edited hobbit
      const newUsers = state.users.map(user => {
        if (user.id === action.payload.id) {
          return {...user, ...action.payload}
        }
        return user
      })

      return {...state, users: newUsers}
    }
    case ('LOAD_SCORES'): {
        return {...state, scores: action.payload}
      }

    case 'ADD_SCORE':
      console.log("in add score")
      return {
        ...state,
        scores: [ ...state.scores, action.payload]
      }

    case ('SELECT_SCORE'): {
      return {...state, selectedScore: action.payload}
    }

    case ('EDIT_SCORE'): {
      // replaces old hobbit object with shiny new edited hobbit
      const newScores = state.scores.map(score => {
        if (score.id === action.payload.id) {
          return {...score, ...action.payload}
        }
        return score
      })

      return {...state, scores: newScores}
    }

    case ('CHANGE_ITEM'): {
      return {...state, activeItem: action.payload}
    }

    case ('ADD_MESSAGE'):
      return {
        ...state,
        messages: [...state.messages]
      }

    case ('SET_MESSAGES'):
      return action.message

    case ('SECRET'):
      return {...state, secretPassword: action.payload}

    default:
      return state;
  }

}

// const initState = {
//   scores: [],
//   selectedScore: {}
// }
//
// export default function manageScores (state = initState, action) {
//   switch (action.type) {
//
//
//
//     default:
//       return state;
//   }
//
// }
