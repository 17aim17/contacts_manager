import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import selectContactReducer from './selectContactReducer'
import modalReducer from './modalReducer'

export default combineReducers({
    form: formReducer,
    contact: contactReducer,
    selectedContact: selectContactReducer,
    isModalVisible: modalReducer
})