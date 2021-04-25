import React from "react";
import styled from "styled-components";

const TextDiv = styled.div`
	width: 50%;
	@media screen and (max-width: 1024px) {
		width: 100%;
		padding: 0;
	}
`;

const SubHeader = styled.h5`
	font-size: 2rem;
	@media screen and (max-width: 1024px) {
		text-align: center;
		padding-bottom: 1rem;
	}
`;

const ParagraphText = styled.p`
	font-size: 1.7rem;
	@media screen and (max-width: 1024px) {
		text-align: center;
	}
`;
const RenderExpertiseText = ({ header, paragraph }) => {
	return (
		<TextDiv>
			<SubHeader>{header}</SubHeader>
			<ParagraphText>{paragraph}</ParagraphText>
		</TextDiv>
	);
};

export default RenderExpertiseText;
