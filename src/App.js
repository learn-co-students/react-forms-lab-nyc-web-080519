import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {


  

  login = (event) => {
    console.log(`Logging in ${event.target.username.value} with password ${event.target.password.value}`);
  };



  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login}/>
        {/* <LoginForm handleLogin={this.login}/> */}

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={280} />



      </div>
    )
  }
}

export default App
