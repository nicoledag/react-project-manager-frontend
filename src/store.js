import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import clientReducer from './reducers/clientReducer'
import projectReducer from './reducers/projectReducer'
import commentReducer from './reducers/commentReducer'

const reducer = combineReducers ({
    currentUser,
    clientReducer,
    projectReducer,
    commentReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CreateStore to Initialize the store and pass in reducers and middleware for asynchronous functions when fetching data.
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store