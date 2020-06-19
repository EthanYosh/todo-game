import React from 'react';

var inputStyle =
{
  display: "flex",
  marginBottom: "40px",
  width: "100%",
  height: "25px",
  flexWrap: "wrap",
  justifyContent: "center",
};

class Login extends React.Component {

  state = {
    users: [
        {
            uuid: 1,
            userName: 'admin',
            password: 'test123',
            isVIP: true,
            email: 'test@kenzie.academy',
        },
      ]
  };



  onChange = (allowTyping) => this.setState({ [allowTyping.target.name]: allowTyping.target.value });





  render() {
    return (
      <span>
        <div className="greeting">
          <h1>Halt! Who goes there??!</h1>
          <br />
          <h3>User</h3>
          <input 
            type="text" 
            maxLength="10"
            name="title"
            placeholder="your username" 
            value={this.state.users.userName}
            onChange={this.onChange}
            style={inputStyle}
          />
          <br />
          <h3>Password</h3>
          <input 
            type="password" 
            maxLength="10"
            name="password"
            placeholder="password" 
            value={this.state.users.password}
            onChange={this.onChange}
            style={inputStyle}
          />
          <br />
          <br />
          <p>
          Don't have an account? <a className="samePara" href="/Register">Create one!</a>
          </p> 
        </div>
      </span>
    );
  }
}


export default Login;