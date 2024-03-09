import React from 'react';
import "./Sub1.css";

const Sub1 = (props) => {
	return (
		<>
			<h3>Sub1페이지</h3>
            <div id="ban1">
		<img src={`${process.env.PUBLIC_URL}/img/p_bn.png`} alt="ban" />		 
		</div>
			
		</>
	);
};

export default Sub1;
