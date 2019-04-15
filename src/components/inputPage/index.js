import React from "react";

export default class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.logItem = this.logItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  logItem() {
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type name here"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.logItem}>Add Item</button>
      </div>
    );
  }
}
