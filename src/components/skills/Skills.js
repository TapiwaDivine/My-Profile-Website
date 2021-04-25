import React from "react";
import styled from "styled-components";

import ProfileImage from "./ExpertiseSection/ProfileImg";
import DisplayExpertiseText from "./ExpertiseSection/ExpertiseSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import LanguagesAndToolsSection from "./LanguagesAndToolsSection/LanguagesTools";

const SkillsPageMainDiv = styled.div`
	width: 100vw;
	height: 100%;
`;

const ExpertiseSectionDiv = styled.div`
	display: flex;
	padding: 5% 10%;
	min-height: 30rem;
	position: relative;
	justify-content: start;
	gap: 1rem;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		max-width: 100vw;
	}
`;

const HrLine = styled.hr`
	border: 0;
	height: 1px;
	width: 70%;
	margin: 2rem auto 2rem auto;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0.75),
		rgba(0, 0, 0, 0)
	);
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
