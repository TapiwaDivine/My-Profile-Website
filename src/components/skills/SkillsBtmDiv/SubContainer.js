import React from "react";
import styled from "styled-components";

import Tool from "./Tool";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto 10rem auto;
	box-shadow: 0.5rem 0.5rem 1rem #777;
	border-radius: 1rem;
	width: 80%;
	justify-content: center;
	padding-top: 2rem;
`;

const CardsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	padding: 2rem;
	margin-left: 6rem;
	margin-right: 6rem;
`;
const SubHeading = styled.h4`
	padding: 4rem;
	font-size: 2.1rem;
	text-decoration: underline;
	text-align: center;
`;

const SubContainer = ({ list, heading }) => {
	return (
		<Container>
			<SubHeading>{heading}</SubHeading>
			<CardsContainer>
				{list.map((tool, index) => {
					return <Tool key={index} icon={tool.icon} text={tool.name} />;
				})}
				;
			</CardsContainer>
		</Container>
	);
};

export default SubContainer;
