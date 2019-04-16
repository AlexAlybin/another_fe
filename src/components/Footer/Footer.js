import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #b7d2ff;
`;

const FooterTitle = styled.h4`
  font-family: sans-serif;
`;

export const Footer = () => (
  <FooterBlock>
    <FooterTitle>© Copyright</FooterTitle>
  </FooterBlock>
);
