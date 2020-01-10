import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import selectContactReducer from './selectContactReducer'
import authReducer from './authReducer'

export default combineReducers({
    form: formReducer,
    contact: contactReducer,
    selectedContact: selectContactReducer,
    auth: authReducer
})