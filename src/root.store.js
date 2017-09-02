import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

import * as reducers from './root.reducers';

const reducer = combineReducers(reducers);

const getMiddleware = () => {
    const middlewares = [];


    //push your middlewares here
    middlewares.push(thunk);

    if (__DEV__) {
        //if dev i want to see a log of my store
        if (process.env.LOGGER_ENABLED) {
            middlewares.push(createLogger());
        }
    }

    return applyMiddleware(...middlewares);
};

const getEnhancers = () => {
    const enhancers = [];

    //add other enhancers here
    enhancers.push(autoRehydrate());

    return enhancers;
};

export const configureStore = createStore(
    reducer,
    compose(getMiddleware(), ...getEnhancers())
);
