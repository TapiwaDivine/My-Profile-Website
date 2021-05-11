import { css } from "styled-components";

const OutterDivMobileStyles = css`
	@media screen and (max-width: 1024px) {
		overflow: scroll;
		flex-direction: column;
	}
`;

const ImageDivStyles = css`
	width: 50%;
	height: 100%;
	margin: 0;
	@media screen and (max-width: 1024px) {
		width: 100vw;
		height: 60vh;
	}
`;

const PageImagesStyles = css`
	object-fit: contain;
	width: 100%;
	max-height: 98%;
	position: relative;
	top: 5vh;
	@media screen and (max-width: 1024px) {
		max-height: 90%;
		top: 1vh;
	}
`;

const TextDivStyles = css`
	height: 100%;
	width: 50%;
	flex-direction: column;
	padding: 0 7rem;
	position: relative;
	top: 0;
	@media screen and (max-width: 1024px) {
		width: 100vw;
		height: 100vh;
		padding: 0 2rem;
	}
`;

const AboutMeHeadingStyles = css`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const AboutTextStyles = css`
	font-size: 1.8rem;
`;

export {
	OutterDivMobileStyles,
	ImageDivStyles,
	PageImagesStyles,
	TextDivStyles,
	AboutMeHeadingStyles,
	AboutTextStyles,
};
