import React from "react";
import styled from "styled-components";

import Tool from "./Tool";
import {
	ToolsBoxDivStyles,
	LanguagesToolsDivStyles,
	LangNToolsSubHeadingStyles,
} from "../../../styles/SkillsPageStyles";

const ToolsBoxDiv = styled.div`
	${ToolsBoxDivStyles}
`;

const LanguagesToolsDiv = styled.div`
	${LanguagesToolsDivStyles}
`;
const SubHeading = styled.h4`
	${LangNToolsSubHeadingStyles}
`;

const LanguagesAndToolsBox = ({ list, heading }) => {
	return (
		<ToolsBoxDiv>
			<SubHeading>{heading}</SubHeading>
			<LanguagesToolsDiv>
				{list.map((tool, index) => {
					return <Tool key={index} icon={tool.icon} text={tool.name} />;
				})}
				;
			</LanguagesToolsDiv>
		</ToolsBoxDiv>
	);
};

export default LanguagesAndToolsBox;
