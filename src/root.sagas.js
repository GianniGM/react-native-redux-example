import {fork} from 'redux-saga/effects';

import {watchIncrementAsync, watchIncrementAsyncLatest} from './mainPage/mainPage.sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        fork(watchIncrementAsync),
        fork(watchIncrementAsyncLatest)
        /*insert other sagas here with fork function
        *
        * fork(myNewWonderfulSagaName)
        *
        * */
    ]
}