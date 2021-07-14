import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/UniversalStyles";
const Link = styled.a`
	${StyledButton}
	& {
		color: #fff;
		border-color: #fff;
		top: 4rem;
		left: 0rem;
	}
	&:hover {
		color: #000;
	}
	&:before {
		background-color: #fff;
		color: blue;
	}
`;

const UILink = ({ linkText, link }) => {
	return <Link href={link}>{linkText}</Link>;
};

export default UILink;
