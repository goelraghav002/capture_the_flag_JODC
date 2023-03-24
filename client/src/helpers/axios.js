import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store';
// import toast from 'react-hot-toast';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
	baseURL: api,
	headers: {
		Authorization: token ? `Bearer ${token}` : '',
	},
});

axiosInstance.interceptors.request.use((req) => {
	const { auth } = store.getState();
	if (auth.token) {
		req.headers.Authorization = `Bearer ${auth.token}`;
	}
	return req;
});

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		console.log(error.response);
		const status = error.response?.status;
		if (status === 500) {
			localStorage.clear();
			// toast.error('User Timeout, please login again to continue...!');
			store.dispatch({ type: 'LOGOUT_SUCCESS' });
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
