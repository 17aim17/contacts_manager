import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

import { addContact, clearCreateMode } from '../actions/contactActions'
import ContactForm from './ContactForm'

class ConatactCreate extends Component {
    onSubmit = (formValues) => {
        this.props.addContact(formValues)
    }
    onDismiss = () => {
        this.props.clearCreateMode()
    }

    actions = () => {
        return [
            { text: 'Close', onClick: this.onDismiss }
        ]
    }

    render() {
        return (<ModalTransition>
            {this.props.isModalVisible && (
                <Modal actions={this.actions()} onClose={this.onDismiss} heading="Create a new Contact">
                    <ContactForm onSubmit={this.onSubmit} />
                </Modal>
            )}
        </ModalTransition>)
    }
}


const mapStateToProps = (state) => {
    const { id, create } = state.selectedContact
    return {
        id: id,
        isModalVisible: create || !!id
    }
}

export default connect(mapStateToProps, { addContact, clearCreateMode })(ConatactCreate)