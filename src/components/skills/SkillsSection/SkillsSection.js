import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../../constants";
import SkillsCard from "./SkillsCard";

const SkillsSectionDiv = styled.div`
	margin: 2rem 0 6rem 0;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 7rem;
	position: relative;
	@media screen and (max-width: 1024px) {
		margin: 0;
		height: 100%;
		padding: 15% 0;
	}
`;

const SectionHeader = styled.h3`
	font-size: 2.6rem;
	text-align: center;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
	}
`;

const SkillsCardsDiv = styled.div`
	height: 42rem;
	width: 80%;
	justify-content: center;
	margin-top: 6rem;
	padding: 2rem;
	padding-bottom: 10rem;
	@media screen and (max-width: 1024px) {
		height: 100%;
		width: 100%;
	}
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
