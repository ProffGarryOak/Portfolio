import React from "react";
import "../styles/Cards.css";
import img from "../assets/img1.png";
const Cards = () => {
	return (
		<div className="container noselect">
			<div className="canvas">
				<div className="tracker tr-1"></div>
				<div className="tracker tr-2"></div>
				<div className="tracker tr-3"></div>
				<div className="tracker tr-4"></div>
				<div className="tracker tr-5"></div>
				<div className="tracker tr-6"></div>
				<div className="tracker tr-7"></div>
				<div className="tracker tr-8"></div>
				<div className="tracker tr-9"></div>
				<div className="tracker tr-10"></div>
				<div className="tracker tr-11"></div>
				<div className="tracker tr-12"></div>
				<div className="tracker tr-13"></div>
				<div className="tracker tr-14"></div>
				<div className="tracker tr-15"></div>
				<div className="tracker tr-16"></div>
				<div className="tracker tr-17"></div>
				<div className="tracker tr-18"></div>
				<div className="tracker tr-19"></div>
				<div className="tracker tr-20"></div>
				<div className="tracker tr-21"></div>
				<div className="tracker tr-22"></div>
				<div className="tracker tr-23"></div>
				<div className="tracker tr-24"></div>
				<div className="tracker tr-25"></div>
				<div id="card">
					<div id="prompt">
						<img src={img} width="50px" alt="Description of the image" /><br/>
            PolyRoot
					</div>

					<div className="title">
						The project showcases the dsa projects made using Flask
					</div>
					{/* <div className="subtitle">mouse hover tracker</div> */}
				</div>
			</div>
		</div>
	);
};

export default Cards;
