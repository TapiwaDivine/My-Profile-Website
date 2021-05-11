import React, { Component } from "react";
import styled from "styled-components";
import {
	FooterMainDivStyles,
	LinkDivStyles,
	LinkedInLinkStyles,
	GithubLinkStyles,
	CopyrightTextStyles,
} from "../../styles/FooterStyles";

const FooterMainDiv = styled.footer`
	${FooterMainDivStyles}
`;

const LinksDiv = styled.div`
	${LinkDivStyles}
`;

const LinkedInLink = styled.a`
	${LinkedInLinkStyles}
`;

const GithubLink = styled.a`
	${GithubLinkStyles}
`;

const CopyrightText = styled.p`
	${CopyrightTextStyles}
`;

class Footer extends Component {
	render() {
		return (
			<FooterMainDiv>
				<LinksDiv>
					<LinkedInLink href="https://www.linkedin.com/in/tapiwa-divine-chipatiko-256028160/">
						<i class="fab fa-linkedin"></i>
					</LinkedInLink>
					<GithubLink href="https://github.com/TapiwaDivine">
						<i class="fab fa-github"></i>
					</GithubLink>
				</LinksDiv>
				<CopyrightText>©Copyright: 2021</CopyrightText>
			</FooterMainDiv>
		);
	}
}

export default Footer;
