import React from "react";
import styled from "styled-components";

import {
	FRONTEND_TOOLS,
	BACKEND_TOOLS,
	WEB_DESIGN_TOOLS,
} from "../../constants";
import LanguagesAndToolsBox from "./LanguagesAndToolsBox";

const MainSectionDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10rem;
	@media screen and (max-width: 1024px) {
		padding: 10% 0;
	} ;
`;
const SectionHeader = styled.h3`
	font-family: "Roboto", sans-serif;
	font-size: 2.6rem;
	margin: 0 auto 5rem auto;
	padding: 1rem;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
		padding: 5%;
		text-align: center;
	} ;
`;

const LanguagesAndToolsSection = () => {
	return (
		<MainSectionDiv>
			<SectionHeader>Programming Languages & Tools Used</SectionHeader>
			<LanguagesAndToolsBox list={FRONTEND_TOOLS} heading="Front End Skills" />
			<LanguagesAndToolsBox list={BACKEND_TOOLS} heading="Backend End Skills" />
			<LanguagesAndToolsBox
				list={WEB_DESIGN_TOOLS}
				heading="Web Designing Skills"
			/>
		</MainSectionDiv>
	);
};

export default LanguagesAndToolsSection;
