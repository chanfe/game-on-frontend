import React, {Component} from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendScore } from '../actions/scoreActions'
import { updateUser } from '../actions/userActions'
import ReactDOM from 'react-dom';


// import UnityLoader from "../Build/UnityLoader.js";
// import UnityProgress from "../TemplateData/UnityProgress.js";

import Unity, { UnityContent } from "react-unity-webgl";

class GamePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver: false,
      score:0,
      first:false,
      second:false,
      secret_place:false,
      secret_ending:false,
      max_score_v1:false
    }

    this.unityContent = new UnityContent(
      "Build/real_game.json",
      "Build/UnityLoader.js"
    );

    this.unityContent.on("GameOver", (score) =>{
      console.log("reseve data",score);
      let max = false;
      if(score == 12000){
        max = true;
      }
      this.setState({
        gameOver: true,
        score:score,
        max_score_v1:max
      })

      const connectScore = {
        "user_id":this.props.login_user.id,
        "points": score,
        "scoreTable_id": 1
      }
      console.log(connectScore)
      this.props.sendScore(connectScore);

      const data = {
        "id":this.props.login_user.id,
        "first_ending":true,
      }

      if(max){
        data.max_score_v1 = max;
      }
      console.log("data", data)
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
          <Container style={{width:'971px',}}>
            <div style={gameStyle}>
              <Unity unityContent={this.unityContent} />
            </div>
          </Container>
        </div>
        <Container>
          <Segment>
            <h2>left arrow - move left</h2>
            <h2>right arrow - move right</h2>
            <h2>up arrow or space bar to jump</h2>
            <h2>spike kills you</h2>
            <h2>press enter to countiue dialogue</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
