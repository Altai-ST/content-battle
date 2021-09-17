import {combineReducers, createStore} from 'redux'
import { User } from './reducers'
import { reducer as formReducer } from 'redux-form'



const redusers = combineReducers({
    User,
    form: formReducer
})

export const store = createStore(redusers)