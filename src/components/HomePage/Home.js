import React, { Fragment } from "react";
import HeroText from "./HeroHeading";
import styled from "styled-components";
import { INTRO_TEXT } from "../../constants";
import { RedButton, HeroDivStyles } from "../../styles";

const HeroDiv = styled.div`
	${HeroDivStyles}
	background: url("https://res.cloudinary.com/deesjttvu/image/upload/v1606430017/tapiwagrey_uopbz3.png")
    no-repeat;
	background-color: #92958d;
	background-position: 100% 10%;
	background-size: contain;
	box-shadow: inset 0.5rem 0rem 10rem 4rem #232321;
	position: relative;
	@media screen and (max-width: 1024px) {
		height: 73vh;
		width: 100%;
		flex: column;
		background-color: #92958d;
		background-position: 50% 100%;
		background-size: cover;
		box-shadow: inset 0.5rem 0rem 5rem 1rem #232321;
	}
`;

const TextBtnDiv = styled.div`
	position: inherit;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
	height: 65%;
	top: 30%;
	left: 12%;
	@media screen and (max-width: 1024px) {
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	} ;
`;

const RedText = styled.span`
	font-family: "Roboto", sans-serif;
	text-transform: capitalize;
	position: inherit;
	color: ${(props) => (props.highlighted ? "#b22222" : "#fff")};
	margin-left: ${(props) => (props.highlighted ? "1rem" : "0")};
`;

const MobileIntroText = styled.p`
	display: none;
	@media screens and (max-width: 1024) {
		text-decoration: none;
		text-transform: capitalize;
		color: #fff;
		font-family: "Roboto", sans-serif;
		font-weight: 300;
		position: relative;
		text-transform: capitalize;
		top: 52vh;
		left: 0%;
		font-size: 3.3vh;
		display: block;
		text-align: center;
	}
`;

const NameInRed = styled.b`
	font-weight: bold;
	color: #b22222;
`;

const SkillsInsightText = styled.span`
	position: relative;
	top: 8%;
	color: #000000;
	font-size: 1.5rem;

	@media screen and (max-width: 1024px) {
		.skills-text {
			top: 51vh;
			margin-left: auto;
			margin-right: auto;
			font-size: 2.1vh;
			font-weight: 400;
			color: #fff;
			position: relative;
		}
	}
`;
const ContactMeButton = styled.a`
	${RedButton}
`;

const Home = () => {
	const breakAt = [0, 2];
	return (
		<HeroDiv className="container-fluid">
			<TextBtnDiv>
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
			</TextBtnDiv>
		</HeroDiv>
	);
};

export default Home;
