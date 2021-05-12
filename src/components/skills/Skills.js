import React from "react";
import styled from "styled-components";

import ProfileImage from "./ExpertiseSection/ProfileImg";
import DisplayExpertiseText from "./ExpertiseSection/ExpertiseSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import LanguagesAndToolsSection from "./LanguagesAndToolsSection/LanguagesTools";
import {
	SkillsPageMainDivStyles,
	ExpertiseSectionDivStyles,
	HrLineStyles,
} from "../../styles/SkillsPageStyles";

const SkillsPageMainDiv = styled.div`
	${SkillsPageMainDivStyles}
`;

const ExpertiseSectionDiv = styled.div`
	${ExpertiseSectionDivStyles}
`;

const HrLine = styled.hr`
	${HrLineStyles}
`;

function Skills(props) {
	return (
		<SkillsPageMainDiv>
			<ExpertiseSectionDiv>
				<ProfileImage />
				<DisplayExpertiseText />
			</ExpertiseSectionDiv>
			<HrLine />
			<SkillsSection />
			<HrLine />
			<LanguagesAndToolsSection />
		</SkillsPageMainDiv>
	);
}

export default Skills;
