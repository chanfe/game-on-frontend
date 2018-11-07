import React, {Component} from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'

// import UnityLoader from "../Build/UnityLoader.js";
// import UnityProgress from "../TemplateData/UnityProgress.js";

class Game2 extends Component {

  render() {
    const gameStyle = {
      width:'900px',
      height:'600px',
      border:0,
    }

    return (
      <div>
        <iframe src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fp5oHLTic0yeGbiGdN8j2AGRauSJ2%2Fcontent%2Fa6a4aea6-e1ef-a70e-bc0f-402e07d828fd&imagePath=screens/0.png" style={gameStyle}></iframe>
        <Segment>
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

export default Game2
