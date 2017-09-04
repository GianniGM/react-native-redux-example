import {fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './mainPage/mainPage.sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        fork(watchIncrementAsync)

        /*insert other sagas here*/
    ]
}