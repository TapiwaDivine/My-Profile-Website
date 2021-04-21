import React from "react";
import styled from "styled-components";

import { EXPERTISE_SECTION_TEXT } from "../../constants";
import RenderExpertiseText from "./ExpertiseText";

const ExpertiseBox = styled.div`
	border: 0.3rem solid #f4f4f4;
	padding: 1rem;
	border-radius: 0.4rem;
	height: 28rem;
`;

const SectionTextDiv = styled.div`
	display: flex;
	position: relative;
	height: 90%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: start;
`;

const DivHeader = styled.h3`
	font-size: 2.6rem;
	text-transform: uppercase;
`;

const DisplayExpertiseText = () => {
	return (
		<ExpertiseBox>
			<DivHeader>Expertise</DivHeader>

			<SectionTextDiv>
				{EXPERTISE_SECTION_TEXT.map((skill, index) => {
					return (
						<RenderExpertiseText
							key={index}
							header={skill.header}
							paragraph={skill.paragraph}
						/>
					);
				})}
			</SectionTextDiv>
		</ExpertiseBox>
	);
};
export default DisplayExpertiseText;
