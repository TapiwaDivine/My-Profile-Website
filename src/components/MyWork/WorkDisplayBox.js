import React from "react";
import styled from "styled-components";

import UILink from "../shared/UILink";
import {
	Display_Box_Styles,
	Box_Heading_Styles,
	Box_Text_Styles,
} from "../../styles/WorkStyles";

const DisplayBox = styled.div`
	${Display_Box_Styles}
`;

const BoxHeading = styled.h4`
	${Box_Heading_Styles}
`;

const BoxText = styled.p`
	${Box_Text_Styles}
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
