import { css } from "styled-components";

const HeroDivStyles = css`
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

const TextAndButtonDivStyles = css`
	position: inherit;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
	height: 65%;
	top: 30%;
	left: 12%;
	@media screen and (max-width: 1024px) {
		width: 100%;
		left: 0;
		top: 35%;
	} ;
`;

const RedTextStyles = css`
	font-family: "Roboto", sans-serif;
	text-transform: capitalize;
	position: inherit;
	color: ${(props) => (props.highlighted ? "#b22222" : "#fff")};
	margin-left: ${(props) => (props.highlighted ? "1rem" : "0")};
`;

const MobileIntroTextStyles = css`
	display: none;
	@media screen and (max-width: 1024px) {
		display: block;
		text-transform: capitalize;
		color: #fff;
		font-family: "Roboto", sans-serif;
		font-weight: 300;
		position: relative;
		text-transform: capitalize;
		top: 54%;
		left: 0%;
		font-size: 3.3vh;
		text-align: center;
	}
`;

const NameInRedStyles = css`
	font-weight: bold;
	color: #b22222;
`;

const SkillsInsightTextStyles = css`
	position: relative;
	top: 8%;
	color: #000000;
	font-size: 1.5rem;

	@media screen and (max-width: 1024px) {
		top: 50%;
		margin-left: auto;
		margin-right: auto;
		font-size: 2.1vh;
		font-weight: 400;
		color: #fff;
		position: relative;
	}
`;
/////////////////////////////////////////////////////// HEADING JS STYLES

const HomeH1Styles = css`
	font-family: "Roboto", san-serif;
	font-size: 5rem;
	position: inherit;
	top: 4rem;
	margin: 0;
	@media screen and (max-width: 1024px) {
		display: none;
	} ;
`;

export {
	HeroDivStyles,
	TextAndButtonDivStyles,
	RedTextStyles,
	MobileIntroTextStyles,
	NameInRedStyles,
	SkillsInsightTextStyles,
	HomeH1Styles,
};
