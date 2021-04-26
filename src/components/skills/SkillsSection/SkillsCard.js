import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
	max-width: 37rem;
	max-height: 39rem;
	padding-bottom: 4rem;
`;

const CardImg = styled.img`
	max-height: 20rem;
`;

const CardHeading = styled.h5`
	font-size: 2rem;
`;

const CardText = styled.p`
	font-size: 1.7rem;
`;

const SkillsCard = ({ img, title, text }) => {
	return (
		<CardDiv className="card">
			<CardImg className="card-img-top" src={img} alt="{ topic }" />
			<div className="card-body">
				<CardHeading className="card-title">{title}</CardHeading>
				<CardText className="card-text">{text}</CardText>
			</div>
		</CardDiv>
	);
};

export default SkillsCard;
