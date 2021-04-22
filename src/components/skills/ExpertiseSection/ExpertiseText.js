import React from "react";
import styled from "styled-components";

const TextDiv = styled.div`
	width: 50%;
	text-align: left;
	padding-bottom: 0.5rem;
	padding-right: 3.5rem;
`;

const SubHeader = styled.h5`
	font-size: 2rem;
`;

const ParagraphText = styled.p`
	font-size: 1.7rem;
`;
const RenderExpertiseText = ({ header, paragraph }) => {
	return (
		<TextDiv className="info-column">
			<SubHeader>{header}</SubHeader>
			<ParagraphText>{paragraph}</ParagraphText>
		</TextDiv>
	);
};

export default RenderExpertiseText;
