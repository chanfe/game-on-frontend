export const updateScore = (score) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/scores/${score.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
