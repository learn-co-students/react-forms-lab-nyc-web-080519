import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleChange =(e) => {
    // console.log(this.state)
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.content} />
        <br/> Remaining Chars: {this.props.maxChars - this.state.content.length}
      </div>
    );
  }
}

export default TwitterMessage;
