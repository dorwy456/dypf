import React from 'react';
import axios from 'axios';

class App extends React.Component {

clickEvent = () =>{
  axios.get('http://localhost:8080/login.do')
  .then(response=>{
    alert(response.data+"클릭");
    console.log("asdfasdf");
  })
  .catch(function (error){
    console.log("asdfasdf");
    alert("error");
  })
}

  render(){
    return (
      <React.Fragment>
        <h3>로그인</h3>
        <div>
          <table>
            <tr>
              <td>아이디</td>
              <td><input/></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input/></td>
            </tr>
          </table>
          <button onClick={this.clickEvent}>로그인</button>
        </div>
      </React.Fragment>
    );
  }
};

export default App;
