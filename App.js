
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';
import {createLogger} from 'redux-logger';

import MainPage from './src/mainPage/screens/mainPage.screen';
import * as reducers from './src/root.reducers';
import counterSaga from './src/mainPage/mainPage.sagas';

// The middlewares which will be used in this App
const middlewares = [];

// Initialize the reducers
const reducer = combineReducers(reducers);

// Initialize the saga middleware
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(counterSaga);


export default class reactNativeReduxSagaExample extends Component {

    render() {
        return (
            <Provider store={store}>
                <MainPage/>
            </Provider>
        )
    }
}
