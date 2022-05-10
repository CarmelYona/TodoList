import { todoReducer } from "./todo-reducer.js"
import { userReducer } from "./user-reducer.js"
const { createStore, applyMiddleware, compose, combineReducers } = Redux
const thunk = ReduxThunk.default


const rootReducer = combineReducers({
    todoModule : todoReducer,
    userModule : userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => {
    // console.log('Current state is:', store.getState())
})