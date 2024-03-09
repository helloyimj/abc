import React from 'react';
import "./Sub2.css";

const Sub2 = (props) => {
	return (
		<>
			<h3>Sub2페이지</h3>
            <div className="list2">
		<h2>BEST</h2>
          <ul>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr1.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr2.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr3.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr4.png`} alt="img" /> </li>
		  </ul>

          <h2>NEW</h2>
          <ul>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr1.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr2.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr3.png`} alt="img" /> </li>
			<li><img src={`${process.env.PUBLIC_URL}/img/mpr4.png`} alt="img" /> </li>
		  </ul> 
		</div>	
		</>
	);
};

export default Sub2;
