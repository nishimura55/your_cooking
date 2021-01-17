import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <h1>Hello, React and Your Cooking!</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));