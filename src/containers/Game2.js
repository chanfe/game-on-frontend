import React, {Component} from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendScore } from '../actions/scoreActions'
import { updateUser } from '../actions/userActions'



// import UnityLoader from "../Build/UnityLoader.js";
// import UnityProgress from "../TemplateData/UnityProgress.js";

import Unity, { UnityContent } from "react-unity-webgl";

class Game2 extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver: false,
      score:0,
      max_score_v2:false
    }

    this.unityContent = new UnityContent(
      "Build/test_game.json",
      "Build/UnityLoader.js"
    );
    this.unityContent.on("second", (second) =>{
      console.log(second);
    })

    this.unityContent.on("GameOver", (score, first, second, secret_place, secret_ending) =>{
      console.log("reseve data 2",score, first, second, secret_place, secret_ending);

      let max = false;
      if(score >= 3200){
        max = true;
      }
      this.setState({
        gameOver: true,
        score:score,
        max_score_v2:max
      })

      const connectScore = {
        "user_id":this.props.login_user.id,
        "points": score,
        "scoreTable_id": 2
      }
      this.props.sendScore(connectScore)

      const data = {
        "id":this.props.login_user.id,
      }
      if(max){
        data.max_score_v2 = max;
      }
      this.props.updateUser(data);
    })
  }

  componentDidMount(){
    if (!this.props.login_user){
      this.props.history.push("/Score")
    }
  }


  render() {
    const gameStyle = {
      width:'971px',
      height:'607px',
      border:0,
    }

    // <iframe src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fp5oHLTic0yeGbiGdN8j2AGRauSJ2%2Fcontent%2Fa6a4aea6-e1ef-a70e-bc0f-402e07d828fd&imagePath=screens/0.png" style={gameStyle}></iframe>
    return (
      <React.Fragment>
        <div style={{background:"#2b2b2b"}}>
          <Container>
            <Unity unityContent={this.unityContent} />
          </Container>
        </div>
        <Container>
          <Segment>
            <h2>left arrow - move left</h2>
            <h2>right arrow - move right</h2>
            <h2>up arrow or space bar to jump</h2>
            <h2>go through wall to get extra jumps</h2>
            <h2>climb the ceiling</h2>
            <h2>touch the bottom and you die</h2>
          </Segment>

        </Container>
      </React.Fragment>
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
    sendScore: (score) => dispatch(sendScore(score)),
    updateUser: (data) => dispatch(updateUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2)
