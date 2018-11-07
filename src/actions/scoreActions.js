export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const updateScore = (score) => {
  return (dispatch) => {
    fetch(`${API_ROOT}/scores/${score.id}`, {
      method: 'PATCH',
      headers: {HEADERS},
      body: JSON.stringify(score)
    })
    .then(r => r.json())
    .then(updatedScore => dispatch({type: 'EDIT_SCORE', payload: score}))
  }
}

export const loadScores = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/scores/')
    .then(r => r.json())
    .then(allScores => dispatch({type: 'LOAD_SCORES', payload: allScores}))
  }
}
