import React from "react";
import styled from "styled-components";

import { SKILLS } from "../../constants";
import Content from "./Content";

const Container = styled.div`
  border: .3rem solid #f4f4f4;
  padding: 1rem;
  border-radius: .4rem;
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  height: 63%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
`;

const SkillsContent = () => {
  return (
    <Container>
      <h4>Expertise</h4>

      <InnerContainer>
        {SKILLS.map((skill, index) => {
          return (
            <Content
              key={index}
              header={skill.header}
              paragraph={skill.paragraph}
            />
          );
        })}
      </InnerContainer>
    </Container>
  );
};
export default SkillsContent;
