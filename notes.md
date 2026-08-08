## Library Used: 
1. redux[r] => It is the core Redux library. It provides things such as:
  -> createStore — classic Redux store creation
  -> combineReducers — combine multiple reducers
  -> applyMiddleware — add middleware
2. react-redux[rr] => Used to connect react with redux.
3. redux-thunk[rt] => It is middleware that allows you to dispatch functions (thunks) instead of only plain action objects and it returns a function that takes dispatch and something that helps to find state".

## Key Points:
1. useSelector[rr] => Used to access state from store.
2. useDispatch[rr] => Used to perform or fire events to reducers

## Architecture Diagram:
                    ┌───────────────┐
                    │   STORE       │
                    │               │  -> Store works is to provide all the reducers state to our applications.
                    │   State       │
                    └───────┬───────┘
                            │
                           read 
                            ↓
                    ┌───────────────┐
                    │   Component   │  -> It can read the states and also dispatch events or actions to the reducers.
                    └───────┬───────┘
                            │
                       dispatch
                            ↓
                    ┌───────────────┐
                    │    ACTION     │
                    │               │
                    │ type          │ -> Dispatch always contains type and payload.
                    │ payload       │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │    REDUCER    │
                    │               │
                    │ old state     │
                    │      +        │  -> It will perform actions and then it will update with new state.
                    │ action        │
                    │      ↓        │
                    │ new state     │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │     STORE     │  -> Then the new state will be get updated in the store thrn it continous like these.
                    │  updated      │
                    └───────────────┘

