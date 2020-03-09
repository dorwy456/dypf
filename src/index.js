import React from 'react';
import ReactDOM from "react-dom"
import Login from './components/page/Login/Login';
import Dashboard from './components/organisms/dashboard/Dashboard';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  shouldComponentUpdate(nextProps, nextState){
    let isChange = false;
    if(JSON.stringify(nextState) !== JSON.stringify(this.state)){
      isChange = true;
    }
    return isChange
  }

  render(){
    return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route render={(props) => (
            sessionStorage.getItem('isAuthenticated') === "true"
            ? <Dashboard/>
            : <Login/>
          )}/>
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
