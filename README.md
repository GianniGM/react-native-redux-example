# REACT-NATIVE REDUX SAMPLES

### REDUX-SAGA HELPERS

- takeEvery: similar to redux-thunk on each click on a fetch button we dispatch a request
- takeLatest: we can star ta new task while there are still one or more previous similar tasks wich
   have not terminated yet (only one saga is permitted)

### REDUX-SAGA DECLARATIVE EFFECTS

saga is implemented using Generator functionsm sgas can yield Effects in multiple forms. The simplest way is to yield a Promise. 
For example __Api.fetch__() or __axios__('url') triggers requests and returns a Promise that will resolve with the resolved response.

#### Call & Put

~~~json
{
  CALL: {
    fn: axios,
    args: ['http://watheaver.com/request']
  }
}
~~~

this happen when we call

~~~javascript
import { call } from 'redux-saga/effects';

[...]

export function fetchUser(request) = {
	//'axios' returns promise
 	return axios.get('url' + request);
};

const response = yield call (fetchUser, request);
yield put({
	type: 'FETCH_USER_SUCCESS',
	response
});
~~~