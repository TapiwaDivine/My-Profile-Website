import React from "react";
import styled from "styled-components";

import ProfileImage from "./SkillsTop/ProfileImage";
import SkillsContent from "./SkillsTop/SkillsContent";
import SkillsSection from "./SkillsMidDiv/SkillsSection";
import SkillTools from "./SkillsBtmDiv/SkillTools";

const Container = styled.div``;

const ContentBlock = styled.div`
	display: flex;
	padding: 5% 10% 3rem;
	min-height: 300px;
	position: relative;
	justify-content: start;
	gap: 4rem;
`;
const Line = styled.hr`
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
		<Container>
			<ContentBlock>
				<ProfileImage />
				<SkillsContent />
			</ContentBlock>
			<Line />
			<SkillsSection />
			<Line />
			<SkillTools />
		</Container>
	);
}

export default Skills;
