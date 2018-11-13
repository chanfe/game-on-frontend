export const setSecret = (res) => {
  return (dispatch) => {
    return dispatch({type: 'SECRET', payload: res})
  }
}
