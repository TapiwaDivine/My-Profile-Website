import React from "react";
import styled from 'styled-components';

const SkillContainer = styled.div`
  position: relative;
  height: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
`;

const SkillImg = styled.img`
  position: relative;
  height: 10rem;
  width: 12rem;
  object-fit: contain;
`;
const TextContainer = styled.div`
  position: relative;
`;

const CardText = styled.h5`
  position: relative;
  font-size: 1.5rem;
  width: 80%;
  text-align: center;  
`;

const Tool = ({icon, text}) => {
  return (
    <SkillContainer>
      <SkillImg  src={icon} alt="skill" />
      <TextContainer>
        <CardText>{text}</CardText>
      </TextContainer>
    </SkillContainer>
  );
}

export default Tool;
