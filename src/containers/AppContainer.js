import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainContainer = styled.div`
	min-height: 100%;
	overflow: auto;
	padding-bottom: 10rem;
	flex: 2;
`;
const AppContainer = ({ children }) => {
	return (
		<div className="App">
			<Navbar className />
			<MainContainer className="wrapper flex-grow-1">{children}</MainContainer>
			<Footer className="footer wrapper flex-grow-2" />
		</div>
	);
};

export default AppContainer;
