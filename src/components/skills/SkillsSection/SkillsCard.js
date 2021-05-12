import React from "react";
import styled from "styled-components";

import {
	CardDivStyles,
	CardImgStyles,
	CardHeadingStyles,
	CardTextStyles,
} from "../../../styles/SkillsPageStyles";

const CardDiv = styled.div`
	${CardDivStyles}
`;

const CardImg = styled.img`
	${CardImgStyles}
`;

const CardHeading = styled.h5`
	${CardHeadingStyles}
`;

const CardText = styled.p`
	${CardTextStyles}
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
