import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #b7d2ff;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  font-family: sans-serif;
`;

export const Header = () => (
  <HeaderBlock>
    <HeaderTitle>Keyword finder</HeaderTitle>
  </HeaderBlock>
);
