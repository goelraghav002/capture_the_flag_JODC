import { createReducer } from '@reduxjs/toolkit';

const activeMenu_initialState = {
    activeMenu: true
}

const login_initialState = {
    token: null,
    admin: {
        _id: '',
        name: '',
        email: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

const signup_initialState = {
    error: null,
    message: '',
    loading: false
}

export const activeMenuReducer = createReducer(activeMenu_initialState, {

    setActiveMenu: (state) => {
        state.activeMenu = !state.activeMenu;
    }

});

export const loginReducer = createReducer(login_initialState, {
    
    LOGIN_REQUEST: (state, action) => {
        // console.log(action);
        state = {
            ...state,
            authenticating: true
        }
        return state;
    },
    
    LOGIN_SUCCESS: (state, action) => {
        console.log(action);
        state = {
            ...state,
            admin: action.payload.admin,
            token: action.payload.token,
            authenticate: true,
            authenticating: false
        }
        return state;
    },

    LOGOUT_REQUEST: (state, action) => {
        console.log(action);
        state = {
            ...state,
            loading: true
        }
        return state;
    },

    LOGOUT_SUCCESS: (state, action) => {
        console.log(action);
        state = {
            ...login_initialState
        }
        return state;
    },

    LOGOUT_FAILURE: (state, action) => {
        console.log(action);
        state = {
            ...state,
            error: action.payload.error,
            loading: false
        }
        return state;
    }

});

export const signupReducer = createReducer(signup_initialState, {

    USER_REGISTER_REQUEST: (state, action) => {
        console.log(action);
        state = {
            ...state,
            loading: true
        }
        return state;
    },

    USER_REGISTER_SUCCESS: (state, action) => {
        console.log(action);
        state = {
            ...state,
            loading: false,
            message: action.payload.message
        }
        return state;
    },

    USER_REGISTER_FAILURE: (state, action) => {
        console.log(action);
        state = {
            ...state,
            loading: false,
            message: action.payload.error
        }
        return state;
    }

})