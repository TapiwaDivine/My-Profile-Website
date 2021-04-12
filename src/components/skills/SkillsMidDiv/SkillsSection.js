import React from "react";
import styled from "styled-components";

import { TECHSKILLS } from "../../constants";
import Card from "./Card";

const Container = styled.div`
	margin: 2rem 0 6rem 0;
	height: 80vh;
`;

const SectionHeader = styled.h3`
	font-size: 2.6rem;
	padding-top: 7rem;
	text-align: center;
	text-transform: uppercase;
`;

const CardsContainer = styled.div`
	height: 40rem;
	display: flex;
	justify-content: center;
	padding-top: 10rem;
`;

const SkillsSection = () => {
	return (
		<Container>
			<SectionHeader>Skills</SectionHeader>

			<CardsContainer className="card-deck text-center">
				{TECHSKILLS.map((skill, index) => {
					return (
						<Card
							key={index}
							img={skill.img}
							title={skill.title}
							text={skill.text}
						/>
					);
				})}
			</CardsContainer>
		</Container>
	);
};

export default SkillsSection;
