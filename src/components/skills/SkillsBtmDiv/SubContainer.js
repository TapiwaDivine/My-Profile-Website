import React from "react";
import styled from "styled-components";

import Tool from "./Tool";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto 4rem auto;
	border: 3rem solid #c4c4c4;
	width: 80%;
	justify-content: center;
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
