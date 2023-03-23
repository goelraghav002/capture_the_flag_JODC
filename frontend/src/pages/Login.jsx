import React from 'react';
import Background from '../components/background/Background';
import Navbar from '../components/Navbar';

const Login = () => {
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
											placeholder='Team name'
										/>
									</div>
									<div className='form-group'>
										<input
											type='password'
											className='form-control'
											id='password'
											placeholder='Password'
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
								className='btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter'
								onclick="window.location.href='instructions.html';"
							>
								<h4>Login</h4>
							</button>
							{/* <small id='registerHelp' className='mt-3 form-text text-muted'>
								Not Registered? <a href='register.html'>Register here</a>
							</small> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
