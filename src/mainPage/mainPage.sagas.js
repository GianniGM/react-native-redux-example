import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Saga!')
}

//this task perform async action
export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({type: 'INCREMENT'});
}

//everyTime I invoce increment action
export function* watchIncrementAsync(isEvery) {
    if(isEvery)
        yield takeEvery('INCREMENT_ASYNC', incrementAsync);
    else
        yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}


