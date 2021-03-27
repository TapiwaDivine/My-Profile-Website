import React from "react";
import styled from "styled-components";

import { FRONTEND_TOOLS, BACKEND_TOOLS, WEB_DESIGN_TOOLS } from "../../constants";
import SubContainer from "./SubContainer"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding:7rem;
`;
const SectionHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  font-weight: bolder;
  margin: 0 auto 9rem auto;
  padding: 3rem;
`;

const SkillsBlock = () => {
  return (
    <Wrapper>
      <SectionHeader>Programming Languages and Tools Used</SectionHeader>
      <SubContainer list={FRONTEND_TOOLS} heading="Front End Skills" />
      <SubContainer list={BACKEND_TOOLS} heading="Backend End Skills" />
      <SubContainer list={WEB_DESIGN_TOOLS} heading="Web Designing Skills" />
    </Wrapper>
  );
};

export default SkillsBlock;
