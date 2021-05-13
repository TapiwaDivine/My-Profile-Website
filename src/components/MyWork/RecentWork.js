import React from "react";
import styled from "styled-components";

import { RECENT_WORK_LIST } from "../../constants";
import UILink from "../shared/UILink";
import WorkDisplayBox from "./WorkDisplayBox";
import {
	Recent_Work_Section_Container_Styles,
	Recent_Work_Boxes_Container_Styles,
	Recent_Work_SectionHeading_Styles,
	Recent_Work_SectionText_Styles,
} from "../../styles/WorkStyles";

const SectionContainer = styled.div`
	${Recent_Work_Section_Container_Styles}
`;

const BoxesContainer = styled.div`
	${Recent_Work_Boxes_Container_Styles}
`;

const SectionHeading = styled.h1`
	${Recent_Work_SectionHeading_Styles}
`;

const SectionText = styled.h4`
	${Recent_Work_SectionText_Styles}
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
