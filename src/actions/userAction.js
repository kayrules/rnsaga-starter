import { LOGIN_REQUEST } from '../constants'

export function loginRequest(credentials) {
    return {
        type: LOGIN_REQUEST,
        payload: credentials
    }
}

// import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './constants'
//
// export function login(credential) {
//     if(credential.username.toLowerCase() === 'demo' && credential.password === 'demo') {
//         return {
//             type: LOGIN_SUCCESS
//         }
//     }
//     else {
//         return {
//             type: LOGIN_ERROR
//         }
//     }
// }
//
// export function logout() {
//     return {
//         type: LOGOUT
//     }
// }
