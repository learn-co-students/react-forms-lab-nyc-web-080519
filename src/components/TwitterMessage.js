import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.maxChar = props.maxChars
  }

  handleMaxChar = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={event => this.handleMaxChar(event)}/>
        {this.maxChar - this.state.input.length} Characters left
      </div>
    );
  }
}

export default TwitterMessage;
