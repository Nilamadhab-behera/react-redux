import { createStore, applyMiddleware, } from 'redux';
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;