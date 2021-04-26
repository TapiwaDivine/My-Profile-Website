import { css } from "styled-components";

const center = css`
	display: flex;
	justify-content: center;
	text-align: center;
`;

const HeroDivStyles = css`
	height: 87vh;
	width: 100%;
	position: relative;
	display: flex;
`;

const RedButton = css`
	& {
		color: red;
		text-decoration: none;
		position: relative;
		width: 18rem;
		height: 6rem;
		z-index: 1;
		top: 8rem;
		left: 0rem;
		text-align: center;
		text-transform: uppercase;
		font-weight: 600;
		color: #b22222;
		font-size: 1.5rem;
		border: 3px solid #b22222;
		border-radius: 0.8rem;
		background-color: transparent;
		cursor: pointer;
		outline: none;
		overflow: hidden;
		transition: ease-out 0.3s;
		padding: 2rem;
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
		background-color: #b22222;
	}
	&:hover:before {
		transition: 0.3s all ease;
		left: 0;
		right: 0;
		opacity: 1;
		z-index: -1;
	}

	@media screen and (max-width: 1024px) {
		padding: 1rem;
		top: 52vh;
		height: 5rem;
		margin-left: auto;
		margin-right: auto;
		height: 5rem;
	} ;
`;

export { center, RedButton, HeroDivStyles };
