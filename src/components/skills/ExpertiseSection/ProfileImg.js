import React from "react";
import styled from "styled-components";

import { center } from "../../../styles/UniversalStyles";
import { ImgDivStyles } from "../../../styles/SkillsPageStyles";

const ImgDiv = styled.div`
	${center};
	${ImgDivStyles}
`;

const ProfileImage = () => {
	return (
		<ImgDiv>
			<img
				src="https://res.cloudinary.com/deesjttvu/image/upload/v1617054796/tapiwa_pbgdse.png"
				alt="profile"
			/>
		</ImgDiv>
	);
};

export default ProfileImage;
