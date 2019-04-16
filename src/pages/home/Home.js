import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff4fc;
  width: 100%;
  height: 250px;
`;
const Input = styled.input`
  height: 30px;
  border: none;
  margin-right: 5px;
`;
const Button = styled.button`
  height: 30px;
  border: none;
`;

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onKeySubmit = this.onKeySubmit.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onSearchChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  onKeySubmit(e) {
    const { search } = this.state;
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push({
        pathname: "/search",
        search: `term=${search}`
      });
    }
  }

  onClickSubmit() {
    const { search } = this.state;
    this.props.history.push({
      pathname: "/search",
      search: `term=${search}`
    });
  }

  render() {
    const { search } = this.state;
    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Type keyword here..."
          value={this.state.search}
          onChange={this.onSearchChange}
          onKeyDown={this.onKeySubmit}
        />
        <Button disabled={!search} onClick={this.onClickSubmit}>
          Search
        </Button>
      </Wrapper>
    );
  }
}
