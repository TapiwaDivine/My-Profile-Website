import React from "react";
import styled from "styled-components";

import { HomeH1Styles } from "../../styles/HomeStyles";

const StyledH1 = styled.h1`
	${HomeH1Styles}
`;

const HeroText = ({ content }) => {
	return <StyledH1>{content}</StyledH1>;
};

export default HeroText;
