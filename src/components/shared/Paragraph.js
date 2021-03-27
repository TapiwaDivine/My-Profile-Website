import React from "react";
import styled from "styled-components";

const Container = styled.p`
  text-align: center;
  padding-bottom: 1rem;
`;

const Paragraph = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Paragraph;
