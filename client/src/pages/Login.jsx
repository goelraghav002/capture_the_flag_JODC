import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../actions/auth.actions';
import Background from '../components/background/Background';
import Navbar from '../components/Navbar';

const Login = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// console.log(email, password);

	const userLogin = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};

		dispatch(login(user));
	};

	if (auth.authenticate) {
		return <Navigate to={`/`} replace />;
	}

	return (
		<>
			<Background />
			<Navbar />

			<div className='jumbotron bg-transparent mb-0 pt-3 radius-0'>
				<form onSubmit={userLogin}>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-8'>
							<h1 className='display-1 bold color_white content__title'>
								LAKSHYA CTF<span className='vim-caret'>&nbsp;</span>
							</h1>
							<p className='text-grey text-spacey hackerFont lead mb-5'>
								Type your credentials to conquer the world
							</p>
							<div className='row hackerFont'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='team_name'
											placeholder='Email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control'
											id='password'
											placeholder='Password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<small id='passHelp' className='form-text text-muted'>
											Make sure nobody's behind you
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xl-8'>
								<button
									type='submit'
								className='btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter'
							>
								<h4>Login</h4>
							</button>
							{/* <small id='registerHelp' className='mt-3 form-text text-muted'>
								Not Registered? <a href='register.html'>Register here</a>
							</small> */}
						</div>
					</div>
				</div>
				</form>
			</div>
		</>
	);
};

export default Login;
