import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

import { PROFILE_DETAIL, PROFILE_IMAGE } from "../../constants";
import Paragraph from "../shared/Paragraph";
import { center, HeroDivStyles } from "../../styles";

const OutterDiv = styled.div`
	${HeroDivStyles}
	@media screen and (max-width: 1024px) {
		overflow: scroll;
		flex-direction: column;
	}
`;

const ImageDiv = styled.div`
	${center};
	width: 50%;
	height: 100%;
	margin: 0;
	@media screen and (max-width: 1024px) {
		width: 100vw;
		height: 60vh;
	}
`;

const PageImage = styled.img`
	object-fit: contain;
	width: 100%;
	max-height: 98%;
	position: relative;
	top: 5vh;
	@media screen and (max-width: 1024px) {
		max-height: 90%;
		top: 1vh;
	}
`;

const TextDiv = styled.div`
	${center};
	height: 100%;
	width: 50%;
	flex-direction: column;
	padding: 0 7rem;
	position: relative;
	top: 0;
	@media screen and (max-width: 1024px) {
		width: 100vw;
		height: 100vh;
		padding: 0 2rem;
	}
`;
const AboutMeHeading = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const AboutText = styled.p`
	font-size: 1.8rem;
`;
function About() {
	const { name } = useParams();
	return (
		<OutterDiv>
			<ImageDiv>
				<PageImage src={PROFILE_IMAGE} />
			</ImageDiv>
			<TextDiv>
				<AboutMeHeading>About Me</AboutMeHeading>
				<AboutText>
					{Object.values(PROFILE_DETAIL).map((value) => {
						return <Paragraph key={uuid()} content={value} />;
					})}
				</AboutText>
			</TextDiv>
			{name}
		</OutterDiv>
	);
}

export default About;
