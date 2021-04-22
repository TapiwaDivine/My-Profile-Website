import React from "react";
import "../../Css/Skillspage.css";

const SkillsCard = ({ img, title, text }) => {
	return (
		<div className="card">
			<img class="card-img-top" src={img} alt="{ topic }" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
			</div>
		</div>
	);
};

export default SkillsCard;
