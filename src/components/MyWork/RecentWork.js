import React from "react";
import styled from "styled-components";
import { RECENT_WORK_LIST } from "../../constants";
import UILink from "../shared/UILink";
import WorkDisplayBox from "./WorkDisplayBox";

const SectionContainer = styled.div`
	position: relative;
	padding-top: 10rem;
	padding-bottom: 10rem;
`;

const BoxesContainer = styled.div`
	position: inherit;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 4rem;
`;

const SectionHeading = styled.h1`
	text-align: center;
	font-size: 4rem;
	padding-top: 6rem;
	padding-bottom: 4rem;
`;

const SectionText = styled.h4`
	text-align: center;
	font-size: 2.5rem;
	padding-bottom: 3rem;
`;

const RecentWork = () => {
	return (
		<SectionContainer>
			<SectionHeading>My Recent Work</SectionHeading>
			<SectionText>
				Here is a view to some of my recent project. Want more?
				<UILink link="mailto:tchipatikoyahoo.com" linkText="Email me" />
			</SectionText>
			<BoxesContainer className="container-fluid">
				{RECENT_WORK_LIST.map((item, index) => (
					<WorkDisplayBox recentWorkItem={item} key={index} />
				))}
			</BoxesContainer>
		</SectionContainer>
	);
};

export default RecentWork;
