import userReduce from './user'
import tokenReduce from './token'
import {combineReducers} from 'redux' 
 
 let reducers = combineReducers({
    userReduce,
    tokenReduce
})
export default reducers