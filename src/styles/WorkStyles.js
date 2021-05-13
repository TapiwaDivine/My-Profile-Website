import { css } from "styled-components";

////////////////////////////////////////////// WORK
//******************* WORK JS STYLES ***********

const Work_Div_Styles = css`
	display: flex;
	flex-direction: column;
`;

const Hero_Section_Styles = css`
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
const Hero_Header_Styles = css`
	font-family: "Montserrat", sans-serif;
	font-weight: 900;
	font-size: 6.4rem;
	padding-top: 18rem;
	text-transform: uppercase;
`;

// **************** RECENT WORK JS STYLES*****************

const Recent_Work_Section_Container_Styles = css`
	padding-top: 10rem;
	padding-bottom: 10rem;
`;

const Recent_Work_Boxes_Container_Styles = css`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 4rem;
`;

const Recent_Work_SectionHeading_Styles = css`
	text-align: center;
	font-size: 4rem;
	padding-top: 6rem;
	padding-bottom: 4rem;
`;

const Recent_Work_SectionText_Styles = css`
	text-align: center;
	font-size: 2.5rem;
	padding-bottom: 3rem;
`;

// ****************  WORK DISPLAY BOX JS  STYLES*****************

const Display_Box_Styles = css`
	height: 35rem;
	width: 50rem;
	background: url("${(props) => props.bgImage}"),
		linear-gradient(${(props) => props.gradient}), no-repeat;
	background-blend-mode: overlay;
	background-size: cover;
	background-position: 50% 50%;
	text-align: center;
	color: #fff;
	margin: 1rem;
	border-radius: 8px;
	padding: 5rem;
`;

const Box_Heading_Styles = css`
	padding-top: 3rem;
	font-size: 3rem;
`;

const Box_Text_Styles = css`
	padding-top: 2rem;
	font-size: 2.3rem;
`;

export {
	Work_Div_Styles,
	Hero_Section_Styles,
	Hero_Header_Styles,
	Recent_Work_Section_Container_Styles,
	Recent_Work_Boxes_Container_Styles,
	Recent_Work_SectionHeading_Styles,
	Recent_Work_SectionText_Styles,
	Display_Box_Styles,
	Box_Heading_Styles,
	Box_Text_Styles,
};
