import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      counter: this.props.maxChars
    };
  }


  handleChange = (event) => {
    console.log(event)
      this.setState({
        message: event.target.value,
        counter: this.state.counter - 1
      })
  }

  render() {
    console.log("state:", this.state)
    // console.log("length:", this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event) => this.handleChange(event)} />
        <br></br>
        <br></br>
        <span>Character Count: {this.state.counter}</span>
      </div>
    );
  }
}

export default TwitterMessage;
