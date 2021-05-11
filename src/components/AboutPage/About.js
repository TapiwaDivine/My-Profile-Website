import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

import { PROFILE_DETAIL, PROFILE_IMAGE } from "../../constants";
import Paragraph from "../shared/Paragraph";
import { center, FullScreenDivStyles } from "../../styles/index";
import {
	OutterDivMobileStyles,
	ImageDivStyles,
	PageImagesStyles,
	TextDivStyles,
	AboutMeHeadingStyles,
	AboutTextStyles,
} from "../../styles/AboutStyles";

const OutterDiv = styled.div`
	${FullScreenDivStyles}
	${OutterDivMobileStyles}
`;

const ImageDiv = styled.div`
	${center};
	${ImageDivStyles}
`;

const PageImage = styled.img`
	${PageImagesStyles}
`;

const TextDiv = styled.div`
	${center};
	${TextDivStyles}
`;
const AboutMeHeading = styled.h1`
	${AboutMeHeadingStyles}
`;

const AboutText = styled.p`
	${AboutTextStyles}
`;
function About() {
	const { name } = useParams();
	return (
		<OutterDiv>
			<ImageDiv>
				<PageImage src={PROFILE_IMAGE} />
			</ImageDiv>
			<TextDiv>
				<AboutMeHeading>About Me</AboutMeHeading>
				<AboutText>
					{Object.values(PROFILE_DETAIL).map((value) => {
						return <Paragraph key={uuid()} content={value} />;
					})}
				</AboutText>
			</TextDiv>
			{name}
		</OutterDiv>
	);
}

export default About;
