import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './assets/css/bootstrap4-neon-glow.min.css';
import './assets/css/main.css';
import About from './pages/About';
import Error from './pages/Error';
import Hackerboard from './pages/Hackerboard';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Login from './pages/Login';
import Quests from './pages/Quests';

import { strings } from './constants';
import Preloader from './components/Preloader';
import { isUserLoggedIn } from './actions/auth.actions';
import PrivateRoute from './components/HOC/Privateroute';

function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return (
		<>
			<Preloader />

			<div className='main'>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute element={<Home />}>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						path='/about'
						element={
							<PrivateRoute element={<About />}>
								<About />
							</PrivateRoute>
						}
					/>
					<Route
						path='/hackerboard'
						element={
							<PrivateRoute element={<Hackerboard />}>
								<Hackerboard />
							</PrivateRoute>
						}
					/>

					<Route
						path='/instructions'
						element={
							<PrivateRoute element={<Instructions />}>
								<Instructions />
							</PrivateRoute>
						}
					/>
					<Route
						path='/quests'
						element={
							<PrivateRoute element={<Quests />}>
								<Quests />
							</PrivateRoute>
						}
					/>

					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
