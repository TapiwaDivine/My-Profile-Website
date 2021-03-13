import React from "react";
import styled from "styled-components";

import { SKILLS } from "../../constants";
import Content from "./Content";

const Row = styled.div``;

const Container = styled.div`
  border: 2px solid #f4f4f4;
  padding: 10px;
  border-radius: 4px;
`;

const Column = styled.div`
  display: flex;
  position: relative;
  height: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
`;

const SkillsContent = () => {
  return (
    <Container>
      <Row className="header">
        <h4>Expertise</h4>
      </Row>

      <Column>
        {SKILLS.map((skill, index) => {
          return (
            <Content
              key={index}
              header={skill.header}
              paragraph={skill.paragraph}
            />
          );
        })}
      </Column>
    </Container>
  );
};
export default SkillsContent;
