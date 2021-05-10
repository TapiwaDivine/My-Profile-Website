import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { MENU_ITEMS } from "../../constants";

const navStyle = {
	textDecoration: "none",
};

const Nav = styled.nav`
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

const NavListItem = styled.li`
	color: ${(props) => (props.active ? "red" : "#e5e5e5")}!important;
	text-decoration: none;
	text-transform: capitalize;
	padding: 1.3rem 1.3rem;

	&:hover {
		background-color: #e5e5e5;
		color: #000 !important;
		border-radius: 4px;
		transition: all 0.2s ease-out;
	}
`;

const NavigationList = styled.ul`
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
		//	opacity: 0.8;
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

const Logo = styled.h1`
	font-family: "Dancing Script", cursive;
	font-weight: 700;
	font-size: 6rem;
	text-transform: capitalize;
	color: #fff;
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

const MobileMenuIcon = styled.div`
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

class Navbar extends Component {
	/* state to manage state of mobile menu icon  */
	state = { clicked: false, activeIndex: 0, menuOpen: false };

	/* function to handle the clicks on mobile menu icon   */
	handleClick = () => {
		this.setState((prevState) => ({
			...prevState,
			clicked: !this.state.clicked,
		}));
	};

	handleListItemClick = (ev) => {
		this.setState((prevState) => ({
			...prevState,
			activeIndex: parseInt(ev.target.id, 10),
			menuOpen: !prevState.menuOpen,
		}));
	};

	handleMenuClick = () => {
		this.setState((prevState) => ({
			...prevState,
			menuOpen: !prevState.menuOpen,
		}));
	};

	render() {
		const { activeIndex, menuOpen } = this.state;
		console.log(menuOpen);
		return (
			<Nav>
				<Link style={navStyle} to="/">
					<Logo>tapiwa</Logo>
				</Link>

				{/* MOBILE MENU ICON SECTION */}
				<MobileMenuIcon onClick={this.handleClick}>
					<IconContext.Provider
						value={{ color: "#fff", className: "global-class-name" }}
					>
						<div>
							{menuOpen ? (
								<FaTimes onClick={this.handleMenuClick} />
							) : (
								<FaBars onClick={this.handleMenuClick} />
							)}
						</div>
					</IconContext.Provider>
				</MobileMenuIcon>

				<NavigationList menuOpen={menuOpen}>
					{/* looping through MenuItems and displaying them with LI tag */}
					{MENU_ITEMS.map((item, index) => {
						return (
							<Link style={navStyle} to={item.url}>
								<NavListItem
									id={index}
									onClick={this.handleListItemClick}
									active={activeIndex === index}
									className={item.cName}
									key={index}
								>
									{item.title}
								</NavListItem>
							</Link>
						);
					})}
				</NavigationList>
			</Nav>
		);
	}
}

export default Navbar;
