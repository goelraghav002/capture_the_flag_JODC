import { configureStore } from '@reduxjs/toolkit';
import { activeMenuReducer, loginReducer, signupReducer } from '../reduers';

const store = configureStore({
	reducer: {
		activeMenu: activeMenuReducer,
		auth: loginReducer,
		user: signupReducer

	},
});

export default store;
