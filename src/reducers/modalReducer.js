import { SET_MODAL, CLEAR_MODAL } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case SET_MODAL:
            return true
        case CLEAR_MODAL:
            return false
        default:
            return state
    }
}