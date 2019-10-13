import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleState = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={event => this.handleState(event)} 
        value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;

// 1. Initialize the state with an empty value of the key that is equal to the name in your input

// 2. Make this a controlled component by adding the attributes to the <input> element. Add a key of <value> to the input that equals to this.state.message - which is the state (the displayed value will always be this.state.message making the React state the source of truth). Text inputs will display the corresponding state values.

// 3. With a controlled component, evry state mutation will have an associated handler function. Add an <onChange> attribute on the input. This is an event listener that invokes an anonymous function that accepts an event as its argument. The event data being passed in is automatically provided by the onChange event listener.

// 4. Define an anonymous  function (handleChange(event)) that will be passed in to that event listener as a value. This is an anonymous function that updates the state (now we have a complete control over our form). The value of the input will be saved in the componnet's state and will update on every change to the input (<onChange> event listener)

// 5. Update the state with setState, assign the key to the new value, which will be event.target.value. Using a controlled form whenever our state changes, the component re-renders, rendering the input with the new updated value

// The event contains data about the target, which is whatever DOM element the event was triggered on. That target being an input, has a value attribute (that we added to it, which reflects the current state). This attribute is equal to whatever is currently entered into that particular input. BUT this is not the value we provided from state! When we read event.target.value, we get whatever content is present when the event fired. In the case of our first input, that would be a combination of whatever this.state.message is equal to plus the last keystroke

// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.
