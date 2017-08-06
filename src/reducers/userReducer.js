import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants';

const initialState = {
    loggedIn: false,
    loading: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                loading: false
            }
        default:
            return state;
    }
}
