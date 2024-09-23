import React from "react";
import "../styles/Features.css";

const features = [
	{
		title: "Fast",
		text: "Fast load times and lag free interaction, my highest priority.",
		icon: "fas fa-stopwatch",
	},
	{
		title: "Responsive",
		text: "My layouts will work on any device, big or small.",
		icon: "fas fa-laptop",
	},
	{
		title: "Intuitive",
		text: "Strong preference for easy to use, intuitive UX/UI.",
		icon: "fas fa-lightbulb",
	},
	{
		title: "Dynamic",
		text: "Websites don't have to be static, I love making pages come to life.",
		icon: "fas fa-rocket",
	},
];

const Features = () => {
	return (
		<>
			<div className="features-wrapper">
				<p className="about-heading">My Code Alchemy...</p>
				<div className="features-container">
					{features.map((feature, index) => (
						<div key={index} className="fcard">
							<div className="ficon">
								<i className={feature.icon}></i>
							</div>
							<p className="title">{feature.title}</p>
							<p className="text">{feature.text}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Features;
