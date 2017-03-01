import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// TODO: add middleware

let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState)
}
