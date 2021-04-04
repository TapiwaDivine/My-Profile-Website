import React from "react";
import styled from "styled-components";

import { FRONTEND_TOOLS, BACKEND_TOOLS, WEB_DESIGN_TOOLS } from "../../constants";
import SubContainer from "./SubContainer"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;
const SectionHeader = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.3rem;
  margin: 0 auto 5rem auto;
  padding: 1rem;
`;

const SkillsBlock = () => {
  return (
    <Wrapper>
      <SectionHeader>Programming Languages & Tools Used</SectionHeader>
      <SubContainer list={FRONTEND_TOOLS} heading="Front End Skills" />
      <SubContainer list={BACKEND_TOOLS} heading="Backend End Skills" />
      <SubContainer list={WEB_DESIGN_TOOLS} heading="Web Designing Skills" />
    </Wrapper>
  );
};

export default SkillsBlock;
