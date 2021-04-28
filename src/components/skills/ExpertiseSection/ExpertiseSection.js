import React from "react";
import styled from "styled-components";

import { EXPERTISE_SECTION_TEXT } from "../../../constants";
import RenderExpertiseText from "./ExpertiseText";

const ExpertiseBox = styled.div`
	border: 0.3rem solid #f4f4f4;
	padding: 1rem;
	border-radius: 0.4rem;
	height: 30%;
`;

const TextBoxDiv = styled.div`
	display: flex;
	position: relative;
	height: 90%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: start;
	padding: 1rem;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const SectionHeader = styled.h3`
	font-size: 2.6rem;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
		text-align: center;
		padding-bottom: 1rem;
	} ;
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
