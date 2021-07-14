import { css } from "styled-components";

//////////////////////////////////////////////      UNIVERSAL STYLES
const center = css`
	display: flex;
	justify-content: center;
	text-align: center;
`;

const FullScreenDivStyles = css`
	height: 87vh;
	width: 100%;
	position: relative;
	display: flex;
`;

const StyledButton = css`
	& {
		text-decoration: none;
		position: relative;
		width: 18rem;
		height: 6rem;
		z-index: 1;
		text-align: center;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1.5rem;
		border: 3px solid;
		border-radius: 0.8rem;
		background-color: transparent;
		cursor: pointer;
		outline: none;
		overflow: hidden;
		transition: ease-out 0.3s;
		padding: 1.5rem;
	}
	&:hover {
		text-decoration: none;
		color: #fff;
		cursor: pointer;
	}
	&:before {
		transition: 0.3s all ease;
		position: absolute;
		top: 0;
		left: 50%;
		right: 50%;
		bottom: 0;
		opacity: 0;
		content: "";
	}
	&:hover:before {
		transition: 0.3s all ease;
		left: 0;
		right: 0;
		opacity: 1;
		z-index: -1;
	}

	@media screen and (max-width: 1024px) {
		top: 55%;
		height: 5rem;
		padding: 1rem;
		margin-left: auto;
		margin-right: auto;
	} ;
`;

export { center, StyledButton, FullScreenDivStyles };
