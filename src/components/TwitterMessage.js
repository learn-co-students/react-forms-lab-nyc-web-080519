import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: this.props.maxChars
    };
  }

  handleMessage = (event) => {
    this.setState({message: event.target.value})
    this.setState({remainingChars: this.state.remainingChars - 1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleMessage(event)} value={this.state.message}/>
        <p>Remaining Chars: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
