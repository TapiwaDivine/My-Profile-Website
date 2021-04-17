import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

import { PROFILE_DETAIL, PROFILE_IMAGE } from "../constants";
import Paragraph from "../shared/Paragraph";
import { center, HeroDivStyles } from "../../styles";

const Container = styled.div`
	${HeroDivStyles}
	background-color: #fff;
	/* align-items: center; */
`;

const PageHeader = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
	${center};
	width: 50%;
	height: 100%;
	margin: 0;
`;

const ProfileImage = styled.img`
	object-fit: contain;
	width: 100%;
	max-height: 96%;
	position: relative;
	top: 5vh;
`;

const Content = styled.div`
	${center};
	height: 80%;
	width: 40%;
	flex-direction: column;
	padding: 0 7rem;
	position: relative;
	top: 0%;
`;

const AboutText = styled.p`
	font-size: 1.5rem;
`;
function About(props) {
	const { name } = useParams();
	return (
		<Container>
			<ImageContainer>
				<ProfileImage src={PROFILE_IMAGE} />
			</ImageContainer>
			<Content>
				<PageHeader>About Me</PageHeader>
				<AboutText>
					{Object.values(PROFILE_DETAIL).map((value) => {
						return <Paragraph key={uuid()} content={value} />;
					})}
				</AboutText>
			</Content>
			{name}
		</Container>
	);
}

export default About;
