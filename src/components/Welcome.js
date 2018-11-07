import React from 'react';

const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome {props.user.username}</h1>
    </div>
  );
};




export default Welcome
