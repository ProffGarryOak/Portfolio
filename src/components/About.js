import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import img2 from "../assets/img2.png";

const About = () => {
	const vantaRef = useRef(null);

	return (
		<div className="about-section">
			<div className="about-content">
				<div className="about-text">
					<h1>Who’s this guy?</h1>
					<p>
						Well, I'm Adarsh Pandey, a full-stack developer who enjoys building
						web experiences from front to back. I specialize in turning caffeine
						into code and bugs into features (occasionally on purpose). With
						skills in React, Node.js, Python, and Django, I spend my days
						crafting clean, efficient code—and my nights questioning why I
						didn’t just become a cat video curator."
					</p>
					<p>
						When I'm not coding, you’ll find me buried in competitive coding
						challenges or tinkering with the latest tech stack. Now that you're
						here, dive in and explore the labyrinth of my projects!"
					</p>
				</div>
				<div className="about-image">
					<img src={img2} alt="Developer" />
				</div>
			</div>
			<div className="whitespace"></div>
		</div>
	);
};

export default About;
