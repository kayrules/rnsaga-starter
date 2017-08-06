import { all } from 'redux-saga/effects'
import { dataSaga } from './dataSaga'
import { userSaga } from './userSaga'

export default function* rootSaga() {
    yield all([
        ...dataSaga,
        ...userSaga
    ])
}

// https://github.com/redux-saga/redux-saga/issues/160
