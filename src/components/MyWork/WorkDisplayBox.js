import React from "react";
import styled from "styled-components";
import UILink from "../shared/UILink";

const DisplayBox = styled.div`
	height: 35rem;
	width: 50rem;
	background: url("${(props) => props.bgImage}"),
		linear-gradient(${(props) => props.gradient}), no-repeat;
	background-blend-mode: overlay;
	background-size: cover;
	background-position: 50% 50%;
	text-align: center;
	color: #fff;
	margin: 1rem;
	border-radius: 8px;
	padding: 5rem;
`;

const BoxHeading = styled.h4`
	padding-top: 3rem;
	font-size: 3rem;
`;

const BoxText = styled.p`
	padding-top: 2rem;
	font-size: 2.3rem;
`;

const WorkDisplayBox = ({ recentWorkItem }) => {
	const { picture, gradient, heading, text, web } = recentWorkItem;

	return (
		<DisplayBox bgImage={picture} gradient={gradient}>
			<BoxHeading>{heading}</BoxHeading>
			<BoxText>{text}</BoxText>
			<UILink link={web} linkText="View Project" />
		</DisplayBox>
	);
};

export default WorkDisplayBox;
