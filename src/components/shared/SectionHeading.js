import React from "react";
import styled from "styled-components";

const SectionHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  padding: 3rem;
  text-align: center;
`;

const SectionHeading = (heading) => {
  return <SectionHeader>{heading}</SectionHeader>;
};

export default SectionHeading;
