import React, { Fragment } from "react";
import "../Css/Homepage.css";
import Heading from "../shared/Heading";
import styled from "styled-components";
import { INTRO_TEXT } from "../constants";
import { primaryButton, divStyles } from "../../styles";

const Container = styled.div`
  ${divStyles}
  background: url("https://res.cloudinary.com/deesjttvu/image/upload/v1606430017/tapiwagrey_uopbz3.png")
    no-repeat;
  background-color: #92958d;
  background-position: 73% 100%;
  background-size: 55%;
  display: block;
  align-items: center;
  box-shadow: inset 5px 0px 100px 40px #232321;
  object-fit: contain;
`;

const StyledSpan = styled.span`
  font-family: "Roboto", sans-serif;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3.4rem;
  position: relative;
  top: 20rem;
  left: 13rem;
  color: ${(props) => (props.highlighted ? "#b22222" : "#fff")};
  margin-left: ${(props) => (props.highlighted ? "1rem" : "0")};
`;

const Button = styled.button`
  ${primaryButton}
`;

function Home() {
  const breakAt = [0, 2];
  return (
    <Container>
      <Heading
        className="hero-text"
        content={
          <Fragment>
            {Object.values(INTRO_TEXT).map((value, index) => {
              return (
                <>
                  <StyledSpan highlighted={index === 2}>{value}</StyledSpan>
                  {breakAt.includes(index) && <br />}
                </>
              );
            })}
          </Fragment>
        }
      />
<div>
      <span className="herotext-mobile">
        hi,{"i'm"} <span className="myName">tapiwa,</span>web developer
      </span>
      <span className="skillHighlight">CSS/Javascript/React/Python</span>
      <a href="mailto:tchipatikoyahoo.com">
        <Button className="contacting-btn">contact me</Button>
      </a>
      </div>
    </Container>
  );
}

export default Home;
