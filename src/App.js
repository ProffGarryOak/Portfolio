import React, { useState, useEffect, useRef } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Features from "./components/Features";
import Skills from "./components/Skills";
import Loader from "./components/Loader";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [contentLoaded, setContentLoaded] = useState(false);
	const [timerDone, setTimerDone] = useState(false);
	const projectsRef = useRef(null);

	useEffect(() => {
		document.body.style.backgroundColor = "#212121";

		const timer = setTimeout(() => {
			setTimerDone(true);
		}, 2250);

		const handleLoad = () => {
			setContentLoaded(true);
		};

		window.addEventListener("load", handleLoad);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	useEffect(() => {
		if (timerDone && contentLoaded) {
			setIsLoading(false);
			document.body.style.backgroundColor = "#fff";
		}
	}, [timerDone, contentLoaded]);

	const scrollToProjects = () => {
		if (projectsRef.current) {
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	// if (isLoading) {
	// 	return <Loader />;
	// }

	return (
		<>
			<Landing onButtonClick={scrollToProjects} />
			<Features />
			<About />
			<Skills />
			<Projects ref={projectsRef} />
			<Footer />
		</>
	);
}

export default App;
