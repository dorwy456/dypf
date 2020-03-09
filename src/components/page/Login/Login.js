import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        id : "",
        password : "",
        loginYn : false
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState !== this.state){
      return true;
    }
  }

  clickEvent = (e) =>{

   sessionStorage.clear();
   sessionStorage.setItem("userInfo", JSON.stringify({id : this.state.id, password : this.state.password}));

    axios.get('http://localhost:8080/login.do')
    .then(response=>{
      sessionStorage.setItem("isAuthenticated",true);
      let result = sessionStorage.getItem("userInfo");
      alert(response.data);
      this.setState({loginYn : true});
      console.log(result);
    })
    .catch(function (error){
      sessionStorage.setItem("isAuthenticated",false);
      sessionStorage.clear();
      alert(response.data);
      this.setState({
              id : "",
              password : "",
              loginYn : false
            });
      })
  }

  logOut = (e) => {
    alert("logOut");
    this.setState({
            id : "",
            password : "",
            loginYn : false
          });
  }

  handleChangeValue = (e) =>{
    console.log(e.target.id+e.target.value);
    this.setState({
      [e.target.id] : [e.target.value]
    });
  }

  render() {
    let loginYn = this.state.loginYn;
    return (
      <React.Fragment>
        <div>
          <h3>로그인</h3>
        </div>
        <div>
          <table>
            <tr>
              <td>아이디</td>
              <td><input id = "id" onChange = {this.handleChangeValue} value ={this.state.id}/></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input id ="password" onChange ={this.handleChangeValue} value ={this.state.password}/></td>
            </tr>
          </table>
          <button onClick={this.clickEvent}>로그인</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
