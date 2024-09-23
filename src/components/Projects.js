import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import Contact from "../components/Contact";

const projects = [
	{
		name: "PolyRoot",
		logo: "proj1.png",
		demoLink: "https://google.com",
		codeLink: "https://github.com/",
		status: "In Works on My Machine Phase",
		description: "Find polynomial roots efficiently.",
	},
	{
		name: "NarrativeNexus",
		logo: "proj1.png",
		demoLink: "#",
		codeLink: "#",
		status: "In Dormant Phase",
		description: "A hub for narrative-driven content creation.",
	},
	{
		name: "PythonZoo",
		logo: "proj1.png",
		demoLink: "#",
		codeLink: "#",
		status: "In Works on My Machine Phase",
		description: "Explore Python libraries with ease.",
	},
	{
		name: "NewsPulse",
		logo: "proj1.png",
		demoLink: "#",
		codeLink: "#",
		status: "In Works on My Machine Phase",
		description: "Stay updated with real-time news analysis.",
	},
	{
		name: "RecipeFinder",
		logo: "proj1.png",
		demoLink: "#",
		codeLink: "#",
		status: "In Dormant Phase",
		description: "Find recipes from ingredients you have at home.",
	},
	{
		name: "PainHub",
		logo: "proj1.png",
		demoLink: "#",
		codeLink: "#",
		status: "In Dormant Phase",
		description: "Track and manage pain relief strategies.",
	},
];

const Projects = React.forwardRef((props, ref) => {
	const vantaRef = useRef(null);

	useEffect(() => {
		const VANTA = window.VANTA;
		const effect = VANTA.WAVES({
			el: vantaRef.current,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1,
			scaleMobile: 1.0,
			color: 0x0,
			shininess: 18.0,
			waveHeight: 8.5,
			waveSpeed: 1.3,
			zoom: 0.96,
		});

		return () => {
			if (effect) effect.destroy();
		};
	}, [ref]);

	return (
		<div ref={ref}>
			<p className="projects-heading">The Creations...</p>
			<div ref={vantaRef} className="projects-wrapper">
				<div className="projects-container">
					{projects.map((project, index) => (
						<div className="proj-card" key={index}>
							<img
								src={require(`../assets/${project.logo}`)}
								alt={project.name}
								className="card__image"
							/>
							<div className="card__content">
								<p className="card__title">{project.name}</p>
								{project.demoLink === "#" && project.codeLink === "#" && (
									<p className="card__subtitle">{project.status}</p>
								)}
								<p className="card__description">{project.description}</p>
								{!(project.demoLink === "#" && project.codeLink === "#") && (
									<>
										<button
											className="card__button"
											onClick={() => window.open(project.demoLink, "_blank")}
											style={{
												display:
													project.demoLink === "#" ? "none" : "inline-block",
											}}
										>
											Live Demo
										</button>
										<button
											className="card__button secondary"
											onClick={() => window.open(project.codeLink, "_blank")}
											style={{
												display:
													project.codeLink === "#" ? "none" : "inline-block",
											}}
										>
											Source Code
										</button>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

export default Projects;
