import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../constants";
import SkillsCard from "./SkillsCard";

const SkillsSectionDiv = styled.div`
	margin: 2rem 0 6rem 0;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const SectionHeader = styled.h3`
	font-size: 2.6rem;
	padding-top: 7rem;
	text-align: center;
	text-transform: uppercase;
`;

const SkillsCardsDiv = styled.div`
	height: 42rem;
	width: 80%;
	justify-content: center;
	margin-top: 6rem;
	padding: 2rem;
`;

const SkillsSection = () => {
	return (
		<SkillsSectionDiv>
			<SectionHeader>Skills</SectionHeader>

			<SkillsCardsDiv className="card-deck text-center">
				{TECHSKILLS.map((skill, index) => {
					return (
						<SkillsCard
							key={index}
							img={skill.img}
							title={skill.title}
							text={skill.text}
						/>
					);
				})}
			</SkillsCardsDiv>
		</SkillsSectionDiv>
	);
};

export default SkillsSection;
