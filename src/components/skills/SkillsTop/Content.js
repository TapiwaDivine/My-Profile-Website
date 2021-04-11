import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 50%;
	text-align: left;
	padding-bottom: 0.5rem;
	padding-right: 3.5rem;
`;

const SubHeader = styled.h5`
	font-size: 2rem;
`;

const ContentText = styled.p`
	font-size: 1.7rem;
`;
const Content = ({ header, paragraph }) => {
	return (
		<Container className="info-column">
			<SubHeader>{header}</SubHeader>
			<ContentText>{paragraph}</ContentText>
		</Container>
	);
};

export default Content;
