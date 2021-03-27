import React from 'react'
import styled from 'styled-components';

import Tool from "./Tool"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  margin-left: 5rem;
  width: 80%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const SubHeading = styled.h4`
font-size: 3rem;
margin-bottom: 4rem;


`;

const SubContainer = ({list, heading}) => {
    return (
        <Container>
        <SubHeading>{heading}</SubHeading>
        <CardsContainer>
        {list.map((tool, index) => {
            return (
              <Tool key={index} icon={tool.icon} text={tool.name} />
            )
          })};
        </CardsContainer>
      </Container>
    )
}

export default SubContainer
