import { css } from "styled-components";

//////////////////////////////////////////////////    NAVBAR STYLES

const NavbarStyles = css`
	background-color: #232121;
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	@media screen and (max-width: 479px) {
		position: relative;
		flex: 1;
	}
`;
//////////////////////////////////////////////////   LI NAV-LIST STYLES

const NavListItemStyles = css`
	text-decoration: "none";
	color: "#e5e5e5";
	text-transform: capitalize;
	padding: 1.3rem 1.3rem;

	&:hover {
		background-color: #e5e5e5;
		color: #000;
		border-radius: 4px;
		transition: all 0.2s ease-out;
	}

	a.selected {
		color: red !important;
	}
`;

//////////////////////////////////////////////////    UL NAV STYLES

const NavigationListStyles = css`
	display: grid;
	grid-template-columns: repeat(3, auto);
	color: white;
	grid-gap: 60px;
	text-align: center;
	list-style: none;
	width: 70vw;
	justify-content: end;
	margin-right: 2rem;

	@media screen and (max-width: 479px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		position: absolute;
		top: 15vh;
		left: -100%;
		background-color: #c4c4c4;
		transition: all 0.5s ease;
		z-index: 1;
		grid-gap: 1rem;
		height: 100vh;

		${(props) =>
			props.menuOpen &&
			css`
				left: 0;
				transition: all 0.5s ease;
			`};
	}
`;

//////////////////////////////////////////////////    LOGO STYLES

const LogoStyles = css`
	font-family: "Dancing Script", cursive;
	font-weight: 700;
	font-size: 6rem;
	text-transform: capitalize;
	justify-self: start;
	margin-left: 2rem;
	cursor: pointer;
	@media screen and (max-width: 479px) {
		font-size: 3.3rem;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(25%, 50%);
	}
`;

//////////////////////////////////////////////////    MOBILE MENU ICON STYLES

const MobileMenuIconStyles = css`
	display: none;
	@media screen and (max-width: 479px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export {
	NavbarStyles,
	NavListItemStyles,
	NavigationListStyles,
	LogoStyles,
	MobileMenuIconStyles,
};
