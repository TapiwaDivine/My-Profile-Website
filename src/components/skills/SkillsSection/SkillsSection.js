import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../../constants";
import SkillsCard from "./SkillsCard";
import {
	SkillsSectionDivStyles,
	SkillsSectionHeaderStyles,
	SkillsCardsDivStyles,
} from "../../../styles/SkillsPageStyles";

const SkillsSectionDiv = styled.div`
	${SkillsSectionDivStyles}
`;

const SectionHeader = styled.h3`
	${SkillsSectionHeaderStyles}
`;

const SkillsCardsDiv = styled.div`
	${SkillsCardsDivStyles}
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
