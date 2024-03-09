import React from 'react';
import "./Main.css";

const Main = (props) => {
	return (
		<>
		<div id="ban">
		<img src={`${process.env.PUBLIC_URL}/img/p_main1.jpg`} alt="ban" />		 
		</div>	
		
		<div className="list">
		<h2>LIST</h2>
          <ul>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr1.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr2.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr3.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr4.png`} alt="img" /> </li>
		  </ul>
		</div>

		<div className="list">
		<h2>LIST1</h2>
          <ul>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr1.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr2.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr3.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/ppr4.png`} alt="img" /> </li>
		  </ul>
		</div>

		</>
	);
};

export default Main;
