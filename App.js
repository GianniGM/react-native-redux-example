
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "./src/root.store";

const store = configureStore;

import MainPage from "./src/mainPage/screens/mainPage.screen";

export default class reactNativeReduxSagaExample extends Component {

    render() {
        return (
            <Provider store={store}>
                <MainPage/>
            </Provider>
        )
    }
}
