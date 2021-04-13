import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainDiv = styled.div`
	min-height: 100%;
	overflow: auto;
	padding-bottom: 10rem;
	flex: 2;
`;
const MainContainer = ({ children }) => {
	return (
		<div className="App">
			<Navbar />
			<MainDiv>{children}</MainDiv>
			<Footer />
		</div>
	);
};

export default MainContainer;
