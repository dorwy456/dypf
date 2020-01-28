import React from 'react';

const App = () => {
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
        <button>로그인</button>
      </div>
    </React.Fragment>
  );
};

export default App;
