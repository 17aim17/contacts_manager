import { SET_MODAL, CLEAR_MODAL } from './types'

export const setModal = () => {
    return {
        type: SET_MODAL
    }
}

export const clearModal = () => {
    return {
        type: CLEAR_MODAL
    }
}
