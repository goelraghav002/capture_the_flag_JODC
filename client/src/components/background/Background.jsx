import React from 'react';

const Background = ({ background }) => {
	return (
		<div className='imgloaded'>
			<div className='glitch'>
				<div className={`glitch__img ${background}`} ></div>
				<div className={`glitch__img ${background}`} ></div>
				<div className={`glitch__img ${background}`} ></div>
				<div className={`glitch__img ${background}`} ></div>
				<div className={`glitch__img ${background}`} ></div>
			</div>
		</div>
	);
};

export default Background;
