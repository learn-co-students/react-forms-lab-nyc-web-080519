import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
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

// Form inputs in React come with specific events. onChange will fire every time the value of an input changes. In our example, we're invoking an anonymous function that accepts event as its argument. The event data being passed in is automatically provided by the onChange event listener.

// The event contains data about the target, which is whatever DOM element the event was triggered on. That target, being an input, has a value attribute. This attribute is equal to whatever is currently entered into that particular input!

// Keep in mind, this is not the value we provided from state. When we read event.target.value, we get whatever content is present when the event fired. 

// In the handleInputChange() we're updating state based on event.target.value
// This, in turn, causes a re-render... and the cycle completes. The new state values we just set are used to set the value attributes of our two inputs. From a user's perspective, the form behaves exactly how we'd expect, displaying the text that is typed. From React's perspective, we gain control over form values, giving us the ability to more easily manipulate (or restrict) what our inputss display, send form data to other parts of the app or out onto the internet..

//  Since event is being passed in as the argument, we have access to some of the event.target attributes that may be present.

// If we give our inputs name attributes, we can accss them as event.target.name    If we make sure the name attributes match keys in our state, we can write a generic handleChange. If we connect this method to both of our inputs, they will both correctly update state. Why? Because for the first input, event.target.name is set to username, while in the second input, it is set to password. Each input's name attribute will change which part of state is actually updated!

// Now that we're controlling the form with state, we want to set up a way to submit our form. For this, we use a second event, onSubmit, added to the form in JSX.

// Now, whenever the form is submitted (by pressing Enter/Return, or clicking a Submit button), an anonymous function will be called, event => this.handleSubmit(event)