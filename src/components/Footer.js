import React, { useState } from "react";
import "../styles/Footer.css";
import Button from "../components/Button";
import Contact from "../components/Contact";

const Footer = () => {
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	const closePopup = (e) => {
		if (e.target.classList.contains("popup-container")) {
			setShowPopup(false);
		}
	};

	return (
		<div className="footer">
			<div className="footer-card">
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link social-link1"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link social-link2"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link social-link3"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link social-link4"
				>
					<i className="fab fa-twitter"></i>
				</a>
			</div>
			<Button
				text="Ring me..."
				color="#fcc008"
				className="footer-button"
				onClick={togglePopup}
			/>
			{showPopup && (
				<div className="popup-container" onClick={closePopup}>
					<div className="popup-content">
						<Contact />
					</div>
				</div>
			)}
		</div>
	);
};

export default Footer;
