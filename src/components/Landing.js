import React, { useEffect, useRef } from "react";
import "../styles/Landing.css";
import img1 from "../assets/img1.png";
import Button from "./Button.js";

const Landing = React.forwardRef(({ onButtonClick }, ref) => {
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
			scale: 1.0,
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
	}, []);

	return (
		<div ref={vantaRef} className="landing-container">
			<div className="landing-section landing-landing">
				<div className="landing-content">
					<img src={img1} alt="Welcome" className="landing-image" />
					<div className="landing-text">
						<h1>Welcome to the chaos!</h1>
						<p>
							I'm Adarsh Pandey, a Data Occultist lost in a labyrinth of code
							and caffeine. This portfolio? Think of it as a haunted house of
							projects—some are alive, some are… well, let’s just say they have
							'works on my machine' character.
						</p>
						<p>
							Proceed if you dare, but remember: curiosity killed the cat, and
							I'm still debugging its nine lives.
						</p>
						<Button
							text="VIEW MY WORK"
							color="#fcc008"
							onClick={onButtonClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Landing;
