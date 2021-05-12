import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
	height: 15rem;
	width: 15rem;
	display: flex;
	flex-direction: column;
`;

const SkillImg = styled.img`
	height: 6rem;
	width: 12rem;
	object-fit: contain;
`;

const CardText = styled.h5`
	font-size: 1.5rem;
	width: 80%;
	text-align: center;
`;

const Tool = ({ icon, text }) => {
	return (
		<SkillContainer>
			<SkillImg src={icon} alt="skill" />
			<CardText>{text}</CardText>
		</SkillContainer>
	);
};

export default Tool;
