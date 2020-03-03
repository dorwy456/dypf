import React from 'react';
import ReactDOM from "react-dom"

class Dashboard extends React.Component {
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
      Main Page !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </React.Fragment>
    );
  }
};

export default Dashboard
