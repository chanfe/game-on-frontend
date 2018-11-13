import React, {Component} from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendScore } from '../actions/scoreActions'


// import UnityLoader from "../Build/UnityLoader.js";
// import UnityProgress from "../TemplateData/UnityProgress.js";

import Unity, { UnityContent } from "react-unity-webgl";

class Game2 extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver: false,
      score:0
    }

    this.unityContent = new UnityContent(
      "Build/real_test_game.json",
      "Build/UnityLoader.js"
    );

    this.unityContent.on("GameOver", score =>{
      this.setState({
        gameOver: true,
        score:score
      })

      const connectScore = {
        "user_id":this.props.login_user.id,
        "points": score
      }
      this.props.sendScore(connectScore)
    })
  }


  render() {
    const gameStyle = {
      width:'971px',
      height:'607px',
      border:0,
    }

    // <iframe src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fp5oHLTic0yeGbiGdN8j2AGRauSJ2%2Fcontent%2Fa6a4aea6-e1ef-a70e-bc0f-402e07d828fd&imagePath=screens/0.png" style={gameStyle}></iframe>
    return (
      <div>
        <Segment>
          <div style={gameStyle}>
            <Unity unityContent={this.unityContent} />
          </div>
          <h2>left arrow - move left</h2>
          <h2>right arrow - move right</h2>
          <h2>up arrow or space bar to jump</h2>
          <h2>go through wall to get extra jumps</h2>
          <h2>climb the ceiling</h2>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login_user: state.login_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendScore: (score) => dispatch(sendScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2)
