import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'
import ContactShow from './ContactShow'

import { setSelectedContact, clearSelectedContact, clearEditMode } from '../actions/contactActions'


class ContactList extends Component {

    onClick = (id) => {
        this.props.setSelectedContact(id)
    }

    onDismiss = () => {
        this.props.clearSelectedContact()
        this.props.clearEditMode()
    }

    renderItem = (contact) => {
        const { firstName, lastName, email, phone } = contact;
        return (
            <div key={contact.id} onClick={() => { this.onClick(contact.id) }}>
                <p>{firstName ? firstName : '' + ' ' + lastName ? lastName : ''}</p>
                <p>{email[0].Email}</p>
                <p>{phone[0].Phone}</p>
                <hr></hr>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.props.contacts.map((contact) => {
                    return this.renderItem(contact)
                })}
                <Modal isModalVisible={this.props.isModalVisible} onDismiss={this.onDismiss}>
                    <ContactShow />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { id, edit } = state.selectedContact
    return {
        contacts: Object.values(state.contact),
        isModalVisible: id || (edit && id)
    }
}

export default connect(mapStateToProps, { setSelectedContact, clearSelectedContact, clearEditMode })(ContactList)