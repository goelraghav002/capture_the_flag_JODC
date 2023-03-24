import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Background from '../components/background/Background';
import Navbar from '../components/Navbar';

import { userInfo } from '../helpers/apiRequest';

const Home = () => {

	const auth = useSelector((state) => state.auth);
	const [user, setUser] = useState(null);

	const handleClick = () => {
		console.log('inside click');
		window.location.replace(`${window.location.href}about`);
	};

	useEffect(() => {
		if (auth.authenticate){
			userInfo().then((data) => setUser(data.user));
		}
	}, []);

	// console.log(user.name);

	return (
		<>
			<Background />
			<Navbar />
			<div className='jumbotron bg-transparent mb-0 pt-3 radius-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-8'>
							<h1 className='display-1 bold color_white content__title'>
								LAKSHYA CTF<span className='vim-caret'>&nbsp;</span>
							</h1>
							<h1 className='display-1 bold color_white content__title2'>
								INC 2020
							</h1>
						</div>
					</div>
					
					<div className='row'>
						<div className='col-xl-4'>
						<p className='mt-5 text-grey text-spacey hackerFont lead'>
								Hi, {user?.name}
								<br /><br />
								Your current score is: {user?.current_score}
								<br />
							</p>
							<button
								onClick={handleClick}
								className='btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter'
							>
								<h4>Continue</h4>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
