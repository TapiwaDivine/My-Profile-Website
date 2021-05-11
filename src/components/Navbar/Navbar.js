import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
	state = { clicked: false, activeIndex: 0, menuOpen: false };

	/* function to handle the clicks on mobile menu icon   */
	handleClick = () => {
		this.setState((prevState) => ({
			...prevState,
			clicked: !this.state.clicked,
		}));
	};

	/* function to handle the clicks on mobile menu icon   */
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
				<Link style={removeTextUnderline} to="/">
					<Logo>tapiwa</Logo>
				</Link>

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
							<Link style={removeTextUnderline} to={item.url}>
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
