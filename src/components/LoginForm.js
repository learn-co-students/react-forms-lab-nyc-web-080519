import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeLoginVals = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  } 


  submitAfterValidation = (event) => {
    event.preventDefault()
    if (!this.state.username == "" &&  !this.state.password == "") {
      this.props.handleLogin(event)
    } 
  }

  render() {
    return (
      // <form onSubmit={(event) => this.state.username === ""  ? null : this.state.password === ""  ? null : this.props.handleLogin(event)}>
      <form onSubmit={(event) => this.submitAfterValidation(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(event) => this.changeLoginVals(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(event) => this.changeLoginVals(event)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
