import React from "react";
import styled from "styled-components";

import {
	TextDivStyles,
	SubHeaderStyles,
	ParagraphTextStyles,
} from "../../../styles/SkillsPageStyles";

const TextDiv = styled.div`
	${TextDivStyles}
`;

const SubHeader = styled.h5`
	${SubHeaderStyles}
`;

const ParagraphText = styled.p`
	${ParagraphTextStyles}
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
