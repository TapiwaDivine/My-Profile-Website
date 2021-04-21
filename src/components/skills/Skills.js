import React from "react";
import styled from "styled-components";

import ProfileImage from "./SkillsTopDiv/ProfileImg";
import DisplayExpertiseText from "./SkillsTopDiv/ExpertiseSection";
import SkillsSection from "./SkillsMidDiv/SkillsSection";
import SkillTools from "./SkillsBtmDiv/SkillTools";

const SkillsPageMainDiv = styled.div`
	width: 100vw;
	height: 100%;
`;

const TopDiv = styled.div`
	display: flex;
	padding: 5% 10%;
	min-height: 30rem;
	position: relative;
	justify-content: start;
	gap: 1rem;
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
			<TopDiv>
				<ProfileImage />
				<DisplayExpertiseText />
			</TopDiv>
			<HrLine />
			<SkillsSection />
			<HrLine />
			<SkillTools />
		</SkillsPageMainDiv>
	);
}

export default Skills;
