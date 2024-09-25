import { createStore , applyMiddleware } from 'redux'
import CounterReducer from './reducers/CounterReducer'
import Themereducer from './reducers/ThemeReducer';
import { combineReducers } from 'redux';
import logger from 'redux-logger' ;
import thunk from 'redux-thunk' ;


const rootreducer =  combineReducers({
    counter:CounterReducer,
    theme:Themereducer
})



// store 
const store = createStore(rootreducer , applyMiddleware(logger , thunk )
)

export default store ;