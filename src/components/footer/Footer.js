import React, { Component } from "react";
import styled from "styled-components";

const FooterMainDiv = styled.footer`
	background-color: #232121;
	height: 10rem;
	width: 100%;
	font-size: 2rem;
	position: relative;
	margin-top: -10rem;
	bottom: 0;
	text-align: center;
	display: flex;
	flex-direction: column;
`;

const LinksDiv = styled.div`
	height: 6rem;
	width: 6rem;
	position: relative;
	width: 20vw;
	margin: 0 auto;
`;

const LinkedinLink = styled.a`
	position: relative;
	height: 5rem;
	width: 5rem;
	left: 10vw;
	top: 2vh;
	color: #fff;

	@media screen and (max-width: 1024px) and (min-width: 480px) {
		.linkedin-link {
			left: 17vw;
		}
	}
	@media screen and (max-width: 479px) {
		.linkedin-link {
			left: 31vw;
		}
	}
`;

const GithubLink = styled.a`
	position: relative;
	height: 5rem;
	width: 5rem;
	left: -10vw;
	top: 2vh;
	color: #fff;
	@media screen and (max-width: 1024px) and (min-width: 480px) {
		.github-link {
			left: 0vw;
		}
	}
	@media screen and (max-width: 479px) {
		.github-link {
			left: 0vw;
		}
	}
`;

const CopyrightText = styled.p`
	position: relative;
	color: #fff;
	font-size: 1rem;
	bottom: -5%;
	margin: auto;

	@media screen and (max-width: 479px) {
		.copyright {
			margin: auto;
		}
	}
`;

class Footer extends Component {
	render() {
		return (
			<FooterMainDiv>
				<LinksDiv>
					<LinkedinLink
						href="https://www.linkedin.com/in/tapiwa-divine-chipatiko-256028160/"
						className="linkedin-link"
					>
						<i class="fab fa-linkedin"></i>
					</LinkedinLink>
					<GithubLink
						href="https://github.com/TapiwaDivine"
						className="github-link"
					>
						<i class="fab fa-github"></i>
					</GithubLink>
				</LinksDiv>
				<CopyrightText>©Copyright: 2021</CopyrightText>
			</FooterMainDiv>
		);
	}
}

export default Footer;
