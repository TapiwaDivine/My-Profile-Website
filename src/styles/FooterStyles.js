import { css } from "styled-components";

const FooterMainDivStyles = css`
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

const LinkDivStyles = css`
	height: 6rem;
	width: 6rem;
	position: relative;
	width: 20vw;
	margin: 0 auto;
`;

const LinkedInLinkStyles = css`
	position: relative;
	height: 5rem;
	width: 5rem;
	left: 10vw;
	top: 2vh;
	color: #fff;

	@media screen and (max-width: 1024px) and (min-width: 480px) {
		left: 17vw;
	}
	@media screen and (max-width: 479px) {
		left: 31vw;
	}
`;

const GithubLinkStyles = css`
	position: relative;
	height: 5rem;
	width: 5rem;
	left: -10vw;
	top: 2vh;
	color: #fff;
	@media screen and (max-width: 1024px) and (min-width: 480px) {
		left: 0vw;
	}
	@media screen and (max-width: 479px) {
		left: 0vw;
	}
`;

const CopyrightTextStyles = css`
	position: relative;
	color: #fff;
	font-size: 1rem;
	bottom: -5%;
	margin: auto;

	@media screen and (max-width: 479px) {
		margin: auto;
	}
`;

export {
	FooterMainDivStyles,
	LinkDivStyles,
	LinkedInLinkStyles,
	GithubLinkStyles,
	CopyrightTextStyles,
};
