import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  min-height: 240px;
  align-items: center;
  padding: 20px 0;
`;

const Column = styled.div`
  flex: ${(props) => props.size};
  height: 40%;
  padding: 0 10px;
`;

const SkillsBlock = ({ leftSize, rightSize, contentLeft, contentRight }) => {
  return (
    <Row>
      <Column size={leftSize}>{contentLeft}</Column>
      <Column size={rightSize}>{contentRight}</Column>
    </Row>
  );
};

export default SkillsBlock;
