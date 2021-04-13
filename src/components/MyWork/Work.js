import React from "react";
import styled from "styled-components";
import RecentWork from "./RecentWork";

const WorkDiv = styled.div`
	position: relative;
`;

const HeroSection = styled.div`
	height: 50rem;
	background: url("https://res.cloudinary.com/deesjttvu/image/upload/v1616860152/coding_easdss.png"),
		linear-gradient(rgba(47, 104, 157, 0.7), rgba(47, 104, 157, 0.7)), no-repeat;
	background-blend-mode: overlay;
	background-size: cover;
	background-position: 50% 50%;
	text-align: center;
	color: #fff;
	position: inherit;
`;
const HeroHeader = styled.h1`
	font-family: "Montserrat", sans-serif;
	font-weight: 900;
	font-size: 6.4rem;
	padding-top: 18rem;
	text-transform: uppercase;
`;

const Work = () => {
	return (
		<WorkDiv>
			<HeroSection className="container-fluid">
				<HeroHeader>My Work & Projects</HeroHeader>
			</HeroSection>
			<RecentWork />
		</WorkDiv>
	);
};

export default Work;
