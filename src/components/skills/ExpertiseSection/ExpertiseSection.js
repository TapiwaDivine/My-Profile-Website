import React from "react";
import styled from "styled-components";

import { EXPERTISE_SECTION_TEXT } from "../../../constants";
import RenderExpertiseText from "./ExpertiseText";
import {
	ExpertiseBoxStyles,
	TextBoxDivStyles,
	ExpertiseSectionHeaderStyles,
} from "../../../styles/SkillsPageStyles";

const ExpertiseBox = styled.div`
	${ExpertiseBoxStyles}
`;

const TextBoxDiv = styled.div`
	${TextBoxDivStyles}
`;

const SectionHeader = styled.h3`
	${ExpertiseSectionHeaderStyles}
`;

const DisplayExpertiseText = () => {
	return (
		<ExpertiseBox>
			<SectionHeader>Expertise</SectionHeader>

			<TextBoxDiv>
				{EXPERTISE_SECTION_TEXT.map((skill, index) => {
					return (
						<RenderExpertiseText
							key={index}
							header={skill.header}
							paragraph={skill.paragraph}
						/>
					);
				})}
			</TextBoxDiv>
		</ExpertiseBox>
	);
};
export default DisplayExpertiseText;
