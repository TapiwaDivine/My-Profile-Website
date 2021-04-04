import React from 'react'
import styled from 'styled-components';

import Tool from "./Tool"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 7rem auto;
  width: 80%;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const SubHeading = styled.h4`
  font-size: 1.8rem;
  margin: 0 auto 4rem 2rem;
  text-decoration: underline;


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
