import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../constants";
import Card from "./Card";

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CardsContainer = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;
const SectionHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  padding: 3rem;
  text-align: center;
`;

const SkillsSection = () => {
  return (
    <Container>
      <SectionHeader>SKILLS</SectionHeader>

      <CardsContainer className="card-deck text-center">
        {TECHSKILLS.map((skill, index) => {
          return (
            <Card
              key={index}
              img={skill.img}
              title={skill.title}
              text={skill.text}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default SkillsSection;
