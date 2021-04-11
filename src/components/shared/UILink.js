import React from "react";
import styled from "styled-components";

const Link = styled.a``;

const UILink = ({ linkText, link }) => {
	return <Link href={link}>{linkText}</Link>;
};

export default UILink;
