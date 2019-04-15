import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center
  flex-direction: column;
`;

const Input = styled.input`
  height: 25px;
  width: 250px;
  border: 1px solid #333;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 150px;
  border: 1px solid #333;
  border-radius: 3px;
  cursor: pointer;
`;

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
    const value = this.state.inputValue;
    value ? console.log(value) : console.log("No text");
    this.setState({
      inputValue: ""
    });
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Type here..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <br />
        <Button onClick={this.logItem}>Print</Button>
      </Wrapper>
    );
  }
}
