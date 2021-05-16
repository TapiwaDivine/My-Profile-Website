import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
	NavbarStyles,
	NavListItemStyles,
	NavigationListStyles,
	LogoStyles,
	MobileMenuIconStyles,
} from "../../styles/NavStyles";
import { MENU_ITEMS } from "../../constants";

const removeTextUnderline = {
	textDecoration: "none",
	color: "#e5e5e5",
};

const current = {
	color: "red",
};

const Nav = styled.nav`
	${NavbarStyles}
`;

const NavListItem = styled.li`
	${NavListItemStyles}
`;

const NavigationList = styled.ul`
	${NavigationListStyles}
`;

const Logo = styled.h1`
	${LogoStyles}
`;

const MobileMenuIcon = styled.div`
	${MobileMenuIconStyles}
`;

class Navbar extends Component {
	/* state to manage state of mobile menu icon  */
	state = { clicked: false, menuOpen: false };

	/* function to handle the clicks on mobile menu icon   */
	handleClick = () => {
		this.setState((prevState) => ({
			...prevState,
			clicked: !this.state.clicked,
		}));
	};

	handleMenuClick = () => {
		this.setState((prevState) => ({
			...prevState,
			menuOpen: !prevState.menuOpen,
		}));
	};

	render() {
		const { menuOpen } = this.state;
		console.log(menuOpen);
		return (
			<Nav>
				<NavLink style={removeTextUnderline} to="/">
					<Logo>tapiwa</Logo>
				</NavLink>

				{/* MOBILE MENU ICON SECTION */}
				<MobileMenuIcon onClick={this.handleClick}>
					<IconContext.Provider value={{ color: "#fff" }}>
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
							<NavLink
								activeStyle={current}
								style={removeTextUnderline}
								to={item.url}
							>
								<NavListItem key={index}>{item.title}</NavListItem>
							</NavLink>
						);
					})}
				</NavigationList>
			</Nav>
		);
	}
}
console.log(Navbar);

export default Navbar;
