

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import combineReducer from './reducer/combineReducer'

export default function ConfigureStore(){
    return createStore(combineReducer,applyMiddleware(thunk))
}