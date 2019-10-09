import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.login = prop.handleLogin
  }

  loginEvent(event){
    event.preventDefault()
    if(this.state.username.length !== 0 && this.state.password.length !== 0){
      this.login(this.state)
    }
  }

  handleUserInput(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePassInput(event) {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={event => this.loginEvent(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUserInput(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassInput(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
