import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: '' };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleMessageChange(event)}
          value={this.state.message}
        />  
        <strong>Remaining Characters: </strong>{this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
