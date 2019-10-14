import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (e) => {
    // console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }
  
  validateFields = (event) => {
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state, event)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.validateFields(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUsername(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassword(event)}  />
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
