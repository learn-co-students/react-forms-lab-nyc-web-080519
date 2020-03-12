import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.props.maxChars-this.state.message.length}</h3>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} />
      </div>
    );
  }
}

export default TwitterMessage;
