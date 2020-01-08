import { SET_SELECTED_CONTACT, CLEAR_SELECTED_CONTACT, SET_CREATE_MODE, CLEAR_CREATE_MODE, SET_EDIT_MODE, CLEAR_EDIT_MODE } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case SET_SELECTED_CONTACT:
            return { ...state, id: action.payload }
        case CLEAR_SELECTED_CONTACT:
            return { ...state, id: null }
        case SET_EDIT_MODE:
            return { ...state, edit: true }
        case CLEAR_EDIT_MODE:
            return { ...state, edit: null }
        case SET_CREATE_MODE:
            return { id: null, edit: null, create: true }
        case CLEAR_CREATE_MODE:
            return { ...state, create: null }
        default:
            return state
    }
} 
