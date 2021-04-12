import React, { Fragment } from "react";
import "../Css/Homepage.css";
import Heading from "../shared/Heading";
import styled from "styled-components";
import { INTRO_TEXT } from "../constants";
import { primaryButton, divStyles } from "../../styles";

const Container = styled.div`
	${divStyles}
	background: url("https://res.cloudinary.com/deesjttvu/image/upload/v1606430017/tapiwagrey_uopbz3.png")
    no-repeat;
	background-color: #92958d;
	background-position: 100% 10%;
	background-size: contain;
	box-shadow: inset 0.5rem 0rem 10rem 4rem #232321;
	position: relative;
`;

const TextContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
	height: 65%;
	top: 30%;
	left: 12%;
`;

const StyledSpan = styled.span`
	font-family: "Roboto", sans-serif;
	text-transform: capitalize;
	font-weight: 500;
	font-size: 3.4rem;
	position: relative;
	top: 20rem;
	left: 13rem;
	color: ${(props) => (props.highlighted ? "#b22222" : "#fff")};
	margin-left: ${(props) => (props.highlighted ? "1rem" : "0")};
`;

const Button = styled.a`
	${primaryButton}
	text-decoration: none;
`;

const Home = () => {
	const breakAt = [0, 2];
	return (
		<Container className="container-fluid">
			<TextContainer className="text-container">
				<Heading
					className="Hero-text"
					content={
						<Fragment>
							{Object.values(INTRO_TEXT).map((value, index) => {
								return (
									<>
										<StyledSpan highlighted={index === 2}>{value}</StyledSpan>
										{breakAt.includes(index) && <br />}
									</>
								);
							})}
						</Fragment>
					}
				/>

				<p className="herotext-mobile">
					hi, im <b className="myName">tapiwa,</b>web developer
				</p>
				<span className="skillHighlight">CSS/Javascript/React/Python</span>
				<Button href="mailto:tchipatikoyahoo.com" className="contacting-btn">
					contact me
				</Button>
			</TextContainer>
		</Container>
	);
};

export default Home;
