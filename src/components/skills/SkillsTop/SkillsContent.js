import React from "react";
import styled from "styled-components";

import { SKILLS } from "../../constants";
import Content from "./Content";

const Container = styled.div`
	border: 0.3rem solid #f4f4f4;
	padding: 1rem;
	border-radius: 0.4rem;
	margin-left: -3rem;
	margin-bottom: 3rem;
`;

const InnerContainer = styled.div`
	display: flex;
	position: relative;
	height: 63%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: start;
`;

const SectionHeader = styled.h3`
	font-size: 2.6rem;
	text-transform: uppercase;
`;

const SkillsContent = () => {
	return (
		<Container>
			<SectionHeader>Expertise</SectionHeader>

			<InnerContainer>
				{SKILLS.map((skill, index) => {
					return (
						<Content
							key={index}
							header={skill.header}
							paragraph={skill.paragraph}
						/>
					);
				})}
			</InnerContainer>
		</Container>
	);
};
export default SkillsContent;
