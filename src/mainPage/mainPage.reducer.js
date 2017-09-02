import * as types from './mainPage.actions';

const initialState = {
    value: 0,
};


export default function counterReducer(
    state:Object = initialState,
    action:Object
) {
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                value: state.value +1
            };

        case types.DECREMENT:
            return {
                ...state,
                value: state.value -1
            };

        default:
            return state;
    }

}