import React from "react";
import styled from "styled-components";

import { center } from "../../../styles";

const Container = styled.div`
  ${center};
  width: 94rem;
  height: 17rem;
  margin-left: 5rem;
  position: relative;

  img {
    width: 100%;
    height: 126%;
    object-fit: contain;
    clip-path: inset(0rem 3rem 0rem 3em);
    background-color: #f4f4f4;
    padding: 0;
    margin: 0;
    position: relative;
  }
`;

const ProfileImage = () => {
  return (
    <Container>
      <img src="https://res.cloudinary.com/deesjttvu/image/upload/v1617054796/tapiwa_pbgdse.png" alt="profile" />
    </Container>
  );
};

export default ProfileImage;
