import { legacy_createStore, applyMiddleware, } from 'redux';
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducers';

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof store.getState>;

export default store;