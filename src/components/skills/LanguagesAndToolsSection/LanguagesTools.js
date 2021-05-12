import React from "react";
import styled from "styled-components";

import {
	FRONTEND_TOOLS,
	BACKEND_TOOLS,
	WEB_DESIGN_TOOLS,
} from "../../../constants";
import LanguagesAndToolsBox from "./LanguagesAndToolsBox";
import {
	LangntoolsMainSectionDivStyles,
	LangntoolsSectionHeaderStyles,
} from "../../../styles/SkillsPageStyles";

const MainSectionDiv = styled.div`
	${LangntoolsMainSectionDivStyles}
`;
const SectionHeader = styled.h3`
	${LangntoolsSectionHeaderStyles}
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
