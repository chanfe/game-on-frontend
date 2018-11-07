import React, {Component} from 'react';

import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container } from 'semantic-ui-react'
// import UnityLoader from "../Build/UnityLoader.js";
// import UnityProgress from "../TemplateData/UnityProgress.js";

class GamePage extends Component {

  render(){
    const gameStyle = {
      width:'960px',
      height:'600px',
      border:0,
    }
    // var gameInstance = UnityLoader.instantiate("gameContainer", "Build/test_game.json", {onProgress: UnityProgress});
    return(
    <Container>
      <iframe src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fp5oHLTic0yeGbiGdN8j2AGRauSJ2%2Fcontent%2F9389de01-6518-6255-1b82-f9eddf7a0ec0&imagePath=screens/1.png"  style={gameStyle}></iframe>
      <Segment>
        <h2>left arrow - move left</h2>
        <h2>right arrow - move right</h2>
        <h2>up arrow or space bar to jump</h2>
      </Segment>
    </Container>
    )
  }
}

export default GamePage
