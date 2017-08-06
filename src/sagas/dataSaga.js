import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import API from '../utils/Api'

function* fetchData (action) {
    try {
        const data = yield API.getPeople()
        yield put({ type: FETCHING_DATA_SUCCESS, data })
    }
    catch (e) {
        yield put({ type: FETCHING_DATA_FAILURE })
    }
}

export const dataSaga = [
    takeEvery(FETCHING_DATA, fetchData),
];
