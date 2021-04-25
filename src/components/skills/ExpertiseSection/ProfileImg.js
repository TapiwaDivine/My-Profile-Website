import React from "react";
import styled from "styled-components";

import { center } from "../../../styles";

const ImgDiv = styled.div`
	${center};
	width: 102rem;
	height: 27.4rem;
	margin-left: 5rem;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		background-color: #f4f4f4;
		position: relative;
	}
	@media screen and (max-width: 1024px) {
		width: 100%;
		margin-left: 0;
		img {
			object-fit: contain;
		}
	}
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
