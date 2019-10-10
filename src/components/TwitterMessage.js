import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: 0,
      message: ""
    };
  }

   messageChangeControll = (event) => {
    let remainingChars = this.props.maxChars - event.target.value.length
    console.log("RemainingChars: ", remainingChars)
    this.setState({
      remainingChars: remainingChars,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
          onChange={(event) => this.messageChangeControll(event)} 
          value={this.state.message}/>
          <h1>RemainingCharacters: {this.state.message ==="" ? this.props.maxChars : this.state.remainingChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
