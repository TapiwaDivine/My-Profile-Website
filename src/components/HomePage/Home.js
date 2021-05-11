import React, { Fragment } from "react";
import HeroText from "./HeroHeading";
import styled from "styled-components";
import { INTRO_TEXT } from "../../constants";
import { RedButton, FullScreenDivStyles } from "../../styles";
import {
	HeroDivStyles,
	TextAndButtonDivStyles,
	RedTextStyles,
	MobileIntroTextStyles,
	NameInRedStyles,
	SkillsInsightTextStyles,
} from "../../styles/HomeStyles";

const HeroDiv = styled.div`
	${FullScreenDivStyles}
	${HeroDivStyles}
`;

const TextAndButtonDiv = styled.div`
	${TextAndButtonDivStyles}
`;

const RedText = styled.span`
	${RedTextStyles}
`;

const MobileIntroText = styled.p`
	${MobileIntroTextStyles}
`;

const NameInRed = styled.b`
	${NameInRedStyles}
`;

const SkillsInsightText = styled.span`
	${SkillsInsightTextStyles}
`;
const ContactMeButton = styled.a`
	${RedButton}
`;

const Home = () => {
	const breakAt = [0, 2];
	return (
		<HeroDiv className="container-fluid">
			<TextAndButtonDiv>
				<HeroText
					content={
						<Fragment>
							{Object.values(INTRO_TEXT).map((value, index) => {
								return (
									<>
										<RedText highlighted={index === 2}>{value}</RedText>
										{breakAt.includes(index) && <br />}
									</>
								);
							})}
						</Fragment>
					}
				/>

				<MobileIntroText>
					hi, im <NameInRed>tapiwa,</NameInRed>web developer
				</MobileIntroText>

				<SkillsInsightText>CSS/Javascript/React/Python</SkillsInsightText>

				<ContactMeButton href="mailto:tchipatikoyahoo.com">
					contact me
				</ContactMeButton>
			</TextAndButtonDiv>
		</HeroDiv>
	);
};

export default Home;
