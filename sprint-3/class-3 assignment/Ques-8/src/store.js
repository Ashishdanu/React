import { createStore , applyMiddleware} from 'redux'
import ReducerCounter from './ReducerCounter'
import logger from 'redux-logger'


const store = createStore(ReducerCounter , applyMiddleware(logger))
export default store