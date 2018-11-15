import React from 'react';

const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{color:"white","font-size": "3rem",}}>Welcome {props.user.username}</h1>
    </div>
  );
};




export default Welcome
