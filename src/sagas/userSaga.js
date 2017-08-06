import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import API from '../utils/Api'

function* loginUser (action) {
    // console.log(action.payload)
    try {
        const data = yield API.login(action.payload)
        yield put({ type: LOGIN_SUCCESS, data })
    }
    catch (e) {
        yield put({ type: LOGIN_ERROR })
    }
}

export const userSaga = [
    takeEvery(LOGIN_REQUEST, loginUser),
];
