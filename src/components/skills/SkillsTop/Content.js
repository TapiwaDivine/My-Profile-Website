import React from "react";
// import "../../Css/Skillspage";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  text-align: left;
  padding-bottom: 5px;
`;

const Content = ({ header, paragraph }) => {
  return (
    <Container className="info-column">
      <h6 className="sub-header">{header}</h6>
      <p className="info-top">{paragraph}</p>
    </Container>
  );
};

export default Content;
