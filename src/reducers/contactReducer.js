import _ from 'lodash'
import { CREATE_CONTACT, SET_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return { ...state, [action.payload.id]: action.payload }
        case SET_CONTACT:
            // return { ...state, ..._.mapKeys(action.payload, 'id') }
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_CONTACT:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_CONTACT:
            return _.omit(state, action.payload)
        default:
            return state
    }
}