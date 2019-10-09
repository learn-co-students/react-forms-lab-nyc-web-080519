import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleInput = event => {
    this.setState((state) => {
      return state.tweet = event.target.value
    })
  }

  remaingingChars = () => {
    return this.props.maxChars - this.state.tweet.length
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  value={this.state.message} onChange={this.handleInput}/>
        <p>Remaining characters: {this.remaingingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
