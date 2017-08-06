import { LOGIN_REQUEST } from '../constants'

export function loginRequest(credentials) {
    return {
        type: LOGIN_REQUEST,
        payload: credentials
    }
}
