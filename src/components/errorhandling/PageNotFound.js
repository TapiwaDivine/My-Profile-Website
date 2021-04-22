import React from "react";
import styled from "styled-components";
import { HeroDivStyles } from "../../styles";

const ErrorPageDiv = styled.div`
	${HeroDivStyles}
	background-color: #92958d;
`;

const ErrorPageText = styled.div`
	color: #ffffff;
	position: absolute;
	top: 40%;
	left: 25%;
	font-size: 7rem;
	font-weight: 900;
`;

const PageNotFound = () => {
	return (
		<ErrorPageDiv>
			<ErrorPageText> 404. Page not found</ErrorPageText>
		</ErrorPageDiv>
	);
};

export default PageNotFound;
