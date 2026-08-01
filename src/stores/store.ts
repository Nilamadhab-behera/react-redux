import { createStore  } from 'redux';
import rootReducer from './rootReducers';

const store = createStore(rootReducer);

export type RootStore = ReturnType<typeof store.getState>;

export default store;