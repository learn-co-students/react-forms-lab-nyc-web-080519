import React from "react";

class LoginForm extends React.Component {

  
  state = {
    username: '',
    password: '',
    submittedData: []
  }
  
  // handleUsernameChange = (event) => {
  //   console.log("This is the event:", event.target)
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value 
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  
    
    // let formData = {username: this.state.username, password: this.state.password}
    // let dataArray = this.state.submittedData.concat(formData)
    // this.setState({submittedData: dataArray})
    
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      )
  }
}

export default LoginForm;
