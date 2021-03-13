import React from "react";
import styled from "styled-components";

import { divStyles } from "../../styles";
import ProfileImage from "./SkillsTop/ProfileImage";
import SkillsContent from "./SkillsTop/SkillsContent";
import SkillsSection from "./SkillsMidDiv/SkillsSection";

const Container = styled.div`
  ${divStyles}
`;

const ContentBlock = styled.div`
  display: flex;
  padding: 0px 10% 3rem;
  min-height: 300px;
  position: relative;
  align-items: center;
  justify-content: start;
  gap: 4rem;
`;
const Line = styled.hr`
  border: 0;
  height: 1px;
  width: 70%;
  margin: auto;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

function Skills(props) {
  return (
    <Container>
      <ContentBlock>
        <ProfileImage />
        <SkillsContent />
      </ContentBlock>
      <Line />
      <ContentBlock>
        <SkillsSection />
      </ContentBlock>
      <Line />
      <ContentBlock>
        <SkillsSection />
      </ContentBlock>
    </Container>
  );
}

export default Skills;
