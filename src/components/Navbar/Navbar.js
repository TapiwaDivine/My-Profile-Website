import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const navStyle = {
	textDecoration: "none",
};

class Navbar extends Component {
	/* state to manage state of mobile menu icon  */
	state = { clicked: false };

	/* function to handle the clicks on mobile menu icon   */
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="NavbarItems">
				<Link style={navStyle} to="/">
					<h1 className="navbar-logo">tapiwa</h1>
				</Link>

				{/* MOBILE MENU ICON SECTION */}
				<div className="menu-icon" onClick={this.handleClick}>
					<i
						className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
					></i>
				</div>

				<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
					{/* looping through MenuItems and displaying them with LI tag */}
					{MenuItems.map((item, index) => {
						return (
							<Link style={navStyle} to={item.url}>
								<li className={item.cName} key={index}>
									{item.title}
								</li>
							</Link>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
