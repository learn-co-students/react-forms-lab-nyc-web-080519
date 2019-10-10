import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    console.log("These are the props:", this.props)
    console.log("state:", this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message}  onChange={event => this.handleMessageChange(event)} />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
