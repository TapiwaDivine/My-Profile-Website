import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
	font-family: "Roboto", san-serif;
	font-size: 5rem;
	position: inherit;
	top: 4rem;
	margin: 0;
	@media screen and (max-width: 1024px) {
		display: none;
	} ;
`;

const BigHeroText = ({ content }) => {
	return <StyledH1>{content}</StyledH1>;
};

export default BigHeroText;
