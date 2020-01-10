import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'
import { editContact, clearSelectedContact, clearEditMode } from '../actions/contactActions'

// individual contact
class ContactShow extends Component {

    onEdit = (formValues) => {
        this.props.editContact(this.props.id, formValues);
    }

    onDismiss = () => {
        this.props.clearSelectedContact()
        this.props.clearEditMode()
    }

    actions = () => {
        const actions = [{ text: 'Close', onClick: this.onDismiss }]
        if(this.props.editMode){
            actions.push({ text: 'Cancel', onClick: this.props.clearEditMode })
        }
        return actions
    }

    render() {
        const initialValues = _.omit(this.props.contact, ['id'])
        return (<ModalTransition>
            {this.props.isModalVisible && (
                <Modal actions={this.actions()} onClose={this.onDismiss} heading={this.props.editMode ? 'Edit Contact' : 'Contact Info'}>
                    {this.props.editMode ? <ContactForm initialValues={initialValues} onSubmit={this.onEdit} /> : <ContactDetail />}
                </Modal>
            )}
        </ModalTransition>)

    }
}

const mapStateToProps = (state) => {
    const { id, edit } = state.selectedContact
    return {
        id: id,
        contact: state.contact[id],
        isModalVisible: !!id || (edit && id),
        editMode: edit
    }
}
export default connect(mapStateToProps, { editContact, clearSelectedContact, clearEditMode })(ContactShow)