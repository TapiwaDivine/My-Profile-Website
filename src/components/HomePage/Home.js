import React, { Fragment } from "react";
import "../Css/Homepage.css";
import BigHeroText from "./HeroHeading";
import styled from "styled-components";
import { INTRO_TEXT } from "../constants";
import { primaryButton, HeroDivStyles } from "../../styles";

const HeroDiv = styled.div`
	${HeroDivStyles}
	background: url("https://res.cloudinary.com/deesjttvu/image/upload/v1606430017/tapiwagrey_uopbz3.png")
    no-repeat;
	background-color: #92958d;
	background-position: 100% 10%;
	background-size: contain;
	box-shadow: inset 0.5rem 0rem 10rem 4rem #232321;
	position: relative;
`;

const PageElementsDiv = styled.div`
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

const Button = styled.a`
	${primaryButton}
	padding: 1.5rem;
	@media screen and (max-width: 1024px) {
		padding: 1rem;
	} ;
`;

const Home = () => {
	const breakAt = [0, 2];
	return (
		<HeroDiv className="container-fluid">
			<PageElementsDiv>
				<BigHeroText
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

				<p className="herotext-mobile">
					hi, im <b className="red_text-mobile">tapiwa,</b>web developer
				</p>
				<span className="skills-text">CSS/Javascript/React/Python</span>
				<Button href="mailto:tchipatikoyahoo.com" className="contact_me-btn">
					contact me
				</Button>
			</PageElementsDiv>
		</HeroDiv>
	);
};

export default Home;
