import { CREATE_CONTACT, SET_CONTACT, EDIT_CONTACT, DELETE_CONTACT, SET_SELECTED_CONTACT, CLEAR_SELECTED_CONTACT, SET_EDIT_MODE, CLEAR_EDIT_MODE, SET_CREATE_MODE, CLEAR_CREATE_MODE } from './types'
import { uuid } from 'uuidv4'
import database from '../firebase'

const uid = 'ASHISH_ONE'

export const addContact = (data) => (dispatch, getState) => {
    database.collection(`users/${uid}/contacts`).add(data).then((ref) => {
        dispatch({
            type: CREATE_CONTACT,
            payload: {
                id: ref.id,
                ...data
            }
        })
    }).catch(e => console.log(e))
}

export const syncAddContact = (data) => {
    return ({
        type: CREATE_CONTACT,
        payload: {
            ...data
        }
    })
}

// export const setContacts = () => (dispatch, getState) => {
//     database.collection(`users/${uid}/contacts`).get().then((snapshot) => {
//         const contacts = []
//         snapshot.forEach(doc => {
//             contacts.push({
//                 id: doc.id,
//                 ...doc.data()
//             })
//         });
//         dispatch({
//             type: SET_CONTACTS,
//             payload: contacts
//         })
//     }).catch(e => console.log(e))
// }

export const syncSetContact = (contact) => {
    return {
        type: SET_CONTACT,
        payload: contact
    }
}

export const editContact = (id, updates) => (dispatch, getState) => {
    database.collection('users').doc(`${uid}`).collection('contacts').doc(`${id}`).update({ ...updates }).then((ref) => {
        dispatch({
            type: EDIT_CONTACT,
            payload: {
                id,
                ...updates
            }
        })
    }).catch(e => console.log(e))
}

export const syncEditContact = (id, updates) => {
    return {
        type: EDIT_CONTACT,
        payload: {
            id,
            ...updates
        }
    }
}

export const deleteContact = (id) => (dispatch, getState) => {
    database.collection('users').doc(`${uid}`).collection('contacts').doc(`${id}`).delete()
    dispatch({
        type: DELETE_CONTACT,
        payload: id

    })
}

export const syncDeleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

// =========================================
// =========================================
// Selected contact metadata
// =========================================
// =========================================

// SET_SELECTED_CONTACT
export const setSelectedContact = (id) => {
    return {
        type: SET_SELECTED_CONTACT,
        payload: id
    }
}
// CLEAR_SELECTED_CONTACT
export const clearSelectedContact = () => {
    return {
        type: CLEAR_SELECTED_CONTACT
    }
}
// SET_EDIT_MODE
export const setEditMode = () => {
    return {
        type: SET_EDIT_MODE
    }
}
// CLEAR_SELECTED_CONTACT
export const clearEditMode = () => {
    return {
        type: CLEAR_SELECTED_CONTACT
    }
}
// SET_CREATE_MODE
export const setCreateMode = () => {
    return {
        type: SET_CREATE_MODE
    }
}
// CLEAR_CREATE_MODE
export const clearCreateMode = () => {
    return {
        type: CLEAR_CREATE_MODE
    }
}