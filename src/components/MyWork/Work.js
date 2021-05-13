import React from "react";
import styled from "styled-components";

import RecentWork from "./RecentWork";
import {
	Work_Div_Styles,
	Hero_Section_Styles,
	Hero_Header_Styles,
} from "../../styles/WorkStyles";

const WorkDiv = styled.div`
	${Work_Div_Styles}
`;

const HeroSection = styled.div`
	${Hero_Section_Styles}
`;
const HeroHeader = styled.h1`
	${Hero_Header_Styles}
`;

const Work = () => {
	return (
		<WorkDiv>
			<HeroSection className="container-fluid">
				<HeroHeader>My Work & Projects</HeroHeader>
			</HeroSection>
			<RecentWork />
		</WorkDiv>
	);
};

export default Work;
