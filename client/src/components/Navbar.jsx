import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { signout } from '../actions/auth.actions';
import { userInfo } from '../helpers/apiRequest';

const Navbar = () => {
	const auth = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(signout());
    };
    
    const [user, setUser] = useState(null);

	useEffect(() => {
		userInfo().then((data) => setUser(data.user));
	}, []);

	return (
		<div className='navbar-dark text-white'>
			<div className='container'>
				<nav className='navbar px-0 navbar-expand-lg navbar-dark'>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<Link
								to='/'
								className='pl-md-0 p-3 text-decoration-none text-light'
							>
								<h3 className='bold'>
									<span className='color_danger'>LAKSHYA</span>
									<span className='color_white'>CTF</span>
								</h3>
							</Link>
						</div>
						<div className='navbar-nav ml-auto'>
							<Link to='/' className='p-3 text-decoration-none text-white bold'>
								Home
							</Link>
							{auth.authenticate ? (
								<>
									{/* <Link
										to='/about'
										className='p-3 text-decoration-none text-light bold'
									>
										About
									</Link> */}
									<Link
										to='/hackerboard'
										className='p-3 text-decoration-none text-light bold'
									>
										Hackerboard
									</Link>
									{/* <Link
										to='/instructions'
										className='p-3 text-decoration-none text-light bold'
									>
										Instructions
									</Link> */}
									<Link
										to='/quests'
										className='p-3 text-decoration-none text-light bold'
									>
										Quests
									</Link>
									<div
										className='p-3 text-decoration-none text-white bold'
										style={{ cursor: 'pointer' }}
									>
                                        <strong></strong>{user?.name}: {user?.current_score} / {user?.total_score}
									</div>
									<div
										onClick={handleLogout}
										className='p-3 text-decoration-none text-light bold'
										style={{ cursor: 'pointer' }}
									>
										Logout
									</div>
								</>
							) : (
								<>
									<Link
										to='/login'
										className='p-3 text-decoration-none text-light bold'
									>
										Login
									</Link>
									<Link
										to='/register'
										className='p-3 text-decoration-none text-light bold'
									>
										Register
									</Link>
								</>
							)}
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
