import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../constants";
import Card from "./Card";

const Container = styled.div`
  padding-bottom: 3rem;
`;

const Row = styled.div``;

const Column = styled.div`
  display: flex;
  position: relative;
  height: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
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
      <Row className="header">
        <SectionHeader>SKILLS</SectionHeader>
      </Row>

      <Column className="card-deck text-center">
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
      </Column>
    </Container>
  );
};

export default SkillsSection;
