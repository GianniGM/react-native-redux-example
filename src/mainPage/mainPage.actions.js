export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const INCREMENT_ASYNC_LATEST ='INCREMENT_ASYNC_LATEST';

export function increment(){
    return{
        type: INCREMENT
    }
}

export function decrement(){
    return{
        type: DECREMENT
    }
}

export function incrementAsync(isLatest){
    if(isLatest)
        return{
            type: INCREMENT_ASYNC_LATEST
        };
    else
        return{
            type: INCREMENT_ASYNC
        };
}
