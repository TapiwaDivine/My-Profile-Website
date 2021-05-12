import { css } from "styled-components";

/////////////////////////////////////////////////////////// SKILLS.JS STYLES

const SkillsPageMainDivStyles = css`
	width: 100vw;
	height: 100%;
`;

const ExpertiseSectionDivStyles = css`
	display: flex;
	padding: 5% 10%;
	min-height: 30rem;
	position: relative;
	justify-content: start;
	gap: 1rem;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		max-width: 100vw;
		padding: 15% 5%;
	}
`;

const HrLineStyles = css`
	border: 0;
	height: 1px;
	width: 70%;
	margin: 2rem auto;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0.75),
		rgba(0, 0, 0, 0)
	);
	@media screen and (max-width: 1024px) {
		margin: 0 auto;
	}
`;

/////////////////////////////////////////////////////// EXPERTISE SECTIONS STYLES

//////////////////// EXPERTISE SECTION JS *************
const ExpertiseBoxStyles = css`
	border: 0.3rem solid #f4f4f4;
	padding: 1rem;
	border-radius: 0.4rem;
	height: 30%;
`;

const TextBoxDivStyles = css`
	display: flex;
	height: 90%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: start;
	padding: 1rem;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const ExpertiseSectionHeaderStyles = css`
	font-size: 2.6rem;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
		text-align: center;
		padding-bottom: 1rem;
	} ;
`;

////////////////////// PROFILE IMG JS ********
const ImgDivStyles = css`
	width: 102rem;
	height: 27.4rem;
	margin-left: 5rem;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		background-color: #f4f4f4;
		position: relative;
	}
	@media screen and (max-width: 1024px) {
		width: 100%;
		margin-left: 0;
		img {
			object-fit: contain;
		}
	}
`;

/////////////////////// ExpertiseText.js Styles************

const TextDivStyles = css`
	width: 50%;
	@media screen and (max-width: 1024px) {
		width: 100%;
		padding: 0;
	}
`;

const SubHeaderStyles = css`
	font-size: 2rem;
	@media screen and (max-width: 1024px) {
		text-align: center;
		padding-bottom: 1rem;
	}
`;

const ParagraphTextStyles = css`
	font-size: 1.7rem;
	@media screen and (max-width: 1024px) {
		text-align: center;
	}
`;

//////////////////////////////////////////////////////////// SKILL SECTION
// ************* SKILLSSECTION.JS  ************
const SkillsSectionDivStyles = css`
	margin: 2rem 0 6rem 0;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 7rem;
	position: relative;
	@media screen and (max-width: 1024px) {
		margin: 0;
		height: 100%;
		padding: 15% 0;
	}
`;

const SkillsSectionHeaderStyles = css`
	font-size: 2.6rem;
	text-align: center;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
	}
`;

const SkillsCardsDivStyles = css`
	height: 42rem;
	width: 80%;
	justify-content: center;
	margin-top: 6rem;
	padding: 2rem;
	padding-bottom: 10rem;
	@media screen and (max-width: 1024px) {
		height: 100%;
		width: 100%;
	}
`;

// ************* SKILLSSECTION.JS  ************
const CardDivStyles = css`
	max-width: 37rem;
	max-height: 39rem;
	padding-bottom: 4rem;
	box-shadow: 5px 5px 10px #777;
`;

const CardImgStyles = css`
	height: 20rem;
`;

const CardHeadingStyles = css`
	font-size: 2rem;
`;

const CardTextStyles = css`
	font-size: 1.7rem;
`;
////////////////////////////////////////////////////////////LANGUAGES & TOOLS SECTION
// ************* LANGUAGESTOOLS.JS  ************

const LangntoolsMainSectionDivStyles = css`
	display: flex;
	flex-direction: column;
	padding: 10rem;
	@media screen and (max-width: 1024px) {
		padding: 10% 0;
	} ;
`;
const LangntoolsSectionHeaderStyles = css`
	font-family: "Roboto", sans-serif;
	font-size: 2.6rem;
	margin: 0 auto 5rem auto;
	padding: 1rem;
	text-transform: uppercase;
	@media screen and (max-width: 1024px) {
		padding: 5%;
		text-align: center;
	} ;
`;

// ************* LANGUAGESTOOLS.JS  ************

const ToolsBoxDivStyles = css`
	display: flex;
	flex-direction: column;
	margin: 0 auto 10rem auto;
	box-shadow: 0.5rem 0.5rem 1rem #777;
	border-radius: 1rem;
	width: 80%;
	justify-content: center;
	padding-top: 2rem;
	@media screen and (max-width: 1024px) {
		width: 90%;
	}
`;

const LanguagesToolsDivStyles = css`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	padding: 2rem;
	margin-left: 6rem;
	margin-right: 6rem;
	@media screen and (max-width: 1024px) {
		margin-left: 1rem;
		margin-right: 1rem;
		padding: 0;
	}
`;
const LangNToolsSubHeadingStyles = css`
	padding: 4rem;
	font-size: 2.1rem;
	text-decoration: underline;
	text-align: center;
`;

export {
	SkillsPageMainDivStyles,
	ExpertiseSectionDivStyles,
	HrLineStyles,
	ExpertiseBoxStyles,
	TextBoxDivStyles,
	ExpertiseSectionHeaderStyles,
	ImgDivStyles,
	TextDivStyles,
	SubHeaderStyles,
	ParagraphTextStyles,
	SkillsSectionDivStyles,
	SkillsSectionHeaderStyles,
	SkillsCardsDivStyles,
	CardDivStyles,
	CardImgStyles,
	CardHeadingStyles,
	CardTextStyles,
	LangntoolsMainSectionDivStyles,
	LangntoolsSectionHeaderStyles,
	ToolsBoxDivStyles,
	LanguagesToolsDivStyles,
	LangNToolsSubHeadingStyles,
};
