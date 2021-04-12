import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
	font-family: "Roboto", san-serif;
	font-size: 4rem;
	position: relative;
	top: -16rem;
	left: -12rem;
`;

const Heading = ({ content }) => {
	return <StyledH1>{content}</StyledH1>;
};

export default Heading;
