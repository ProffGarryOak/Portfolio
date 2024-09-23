import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [userEmail, setUserEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const userTemplateParams = {
			message,
			from_name: name,
			reply_to: userEmail, // User's email included in the message
		};

		const autoReplyTemplateParams = {
			from_name: "Adarsh Pandey",
			reply_to: userEmail,
		};

		// Send user's message
		emailjs
			.send(
				"service_a1febpo",
				"template_0hnaroq",
				userTemplateParams,
				"PQvrBCONvGRr1ESmm" // Your user ID
			)
			.then((response) => {
				console.log(
					"Message sent successfully!",
					response.status,
					response.text
				);
				setSuccess(true);
				setMessage("");
				setUserEmail("");
				setName(""); // Clear the name input

				// 	// Send auto-reply only to the user
				// 	emailjs
				// 		.send(
				// 			"service_a1febpo",
				// 			"template_bymhq7i",
				// 			autoReplyTemplateParams,
				// 			"PQvrBCONvGRr1ESmm" // Your user ID
				// 		)
				// 		.then((response) => {
				// 			console.log("Auto-reply sent!", response.status, response.text);
				// 		})
				// 		.catch((err) => {
				// 			console.error("Failed to send auto-reply. Error: ", err);
				// 		});
			})
			.catch((err) => {
				console.error("Failed to send message. Error: ", err);
				setError(true);
			});
	};

	return (
		<div className="contact-container">
			<h1>Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="email"
					placeholder="Your Email"
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
					required
				/>
				<textarea
					placeholder="Your Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
				<button type="submit">Send Message</button>
			</form>
			{success && <p>Message sent successfully!</p>}
			{error && (
				<p>There was an error sending your message. Please try again.</p>
			)}
		</div>
	);
};

export default Contact;
