import React, { Component } from 'react';

import * as counterAction from '../mainPage.actions';
import Counter from "../../components/counter.component";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class MainPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {state, actions} = this.props;

        return (
            <Counter
                value={state.value}
                increment={() => actions.increment()}
                decrement={() => actions.decrement()}
                incrementAsync={() => actions.incrementAsync(false)}
                incrementAsyncLatest={() => actions.incrementAsync(true)}
            />
        );
    }
}

export default connect(
    state => ({
        state: state.counterReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterAction, dispatch)
    })
)(MainPage);