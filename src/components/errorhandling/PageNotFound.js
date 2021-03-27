import React from "react";
import styled from "styled-components";
import { divStyles } from "../../styles";

const ErrorPageContainer = styled.div`
  ${divStyles}
  background-color: #92958d;
`;

const ErrorPageText = styled.div`
  color: #ffffff;
  position: absolute;
  top: 40%;
  left: 25%;
  font-size: 7rem;
  font-weight: 900;
`;

const PageNotFound = () => {
  return (
    <ErrorPageContainer>
      <ErrorPageText> 404. Page not found</ErrorPageText>
    </ErrorPageContainer>
  );
};

export default PageNotFound;
