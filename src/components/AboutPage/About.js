import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

import { PROFILE_DETAIL, PROFILE_IMAGE } from "../constants";
import Heading from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import { center, divStyles } from "../../styles";

const Container = styled.div`
  ${divStyles}
  background-color: #fff;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  ${center};
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const ProfileImage = styled.img`
  object-fit: contain;
  z-index: 0;
  width: auto;
  max-height: 40rem;
  position: relative;
  bottom: -10px;
`;

const Content = styled.div`
  ${center};
  width: 50%;
  flex-direction: column;
  padding: 0 7rem;
  font-size: 1.6rem;
`;

function About(props) {
  const { name } = useParams();
  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={PROFILE_IMAGE} />
      </ImageContainer>
      <Content>
        <Heading content="About me" />
        <div>
          {Object.values(PROFILE_DETAIL).map((value) => {
            return <Paragraph key={uuid()} content={value} />;
          })}
        </div>
      </Content>
      {name}
    </Container>
  );
}

export default About;
