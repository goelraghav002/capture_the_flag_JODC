import axios from './axios';

// export const getAdminCustomers = async () => {
// 	const id = localStorage.getItem('_id');
// 	const res = await axios
// 		.get(`/customer/all/${id}`)
// 		.catch((err) => console.log(err));

// 	const data = res.data.admin;
// 	return data;
// };

// export const getCustomerTransactions = async (id) => {
// 	const res = await axios
// 		.get(`/transaction/all/${id}`)
// 		.catch((err) => console.log(err));
// 	const data = res.data.customer;
// 	return data;
// };

// export const getAdminUsers = async () => {
// 	const id = localStorage.getItem('_id');
// 	const res = await axios
// 		.get(`/user/all/${id}`)
// 		.catch((err) => console.log(err));
// 	const data = await res.data.admin;
// 	return data;
// };



export const userInfo = async () => {
	const id = localStorage.getItem('_id');
	const res = await axios
		.get(`/user/details/${id}`)
		.catch((err) => console.log(err));
    const data = res.data;
	return data;
};
