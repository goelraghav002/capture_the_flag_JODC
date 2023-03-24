import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
	const token = window.localStorage.getItem('token');

	return <>{token ? element : <Navigate to='/login' />}</>;
};

export default PrivateRoute;