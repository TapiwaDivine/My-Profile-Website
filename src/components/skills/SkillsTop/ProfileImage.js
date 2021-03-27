import React from "react";
import styled from "styled-components";

import ProfileImg from "../../../images/profileImage.svg";
import { center } from "../../../styles";

const Container = styled.div`
  ${center};
  min-width: 20rem;
  height: 17rem;
  position: relative;

  img {
    width: 100%;
    height: 114%;
    object-fit: cover;
    clip-path: inset(0px 0px 18px 0px);
    background-color: #f4f4f4;
    padding: 0;
    margin: 0;
  }
`;

const ProfileImage = () => {
  return (
    <Container>
      <img src={ProfileImg} alt="profile" />
    </Container>
  );
};

export default ProfileImage;
