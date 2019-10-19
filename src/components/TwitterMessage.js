import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      counter: this.props.maxChars
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value,
      counter: this.props.maxChars - this.state.message.length
    })
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} />
      </div>
    );
  }
}

export default TwitterMessage;
