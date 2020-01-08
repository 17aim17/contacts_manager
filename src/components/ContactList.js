import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'
import ContactShow from './ContactShow'

import { setSelectedContact, clearSelectedContact } from '../actions/contactActions'
import { setModal, clearModal } from '../actions/modalActions'

class ContactList extends Component {

    onClick = (id) => {
        this.props.setModal()
        this.props.setSelectedContact(id)
    }

    onDismiss = () => {
        this.props.clearModal()
        this.props.clearSelectedContact()
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
    return {
        contacts: Object.values(state.contact),
        isModalVisible: state.isModalVisible
    }
}

export default connect(mapStateToProps, { setSelectedContact, clearSelectedContact, setModal, clearModal })(ContactList)