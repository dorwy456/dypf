import React from 'react';
import Login from './Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <div>
          <Login/>
        </div>
      </React.Fragment>
    );
  }
};

export default App;
