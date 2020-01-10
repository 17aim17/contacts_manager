import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactShow from './ContactShow'

import { setSelectedContact, setEditMode } from '../actions/contactActions'


class ContactList extends Component {

    onClick = (id) => {
        this.props.setSelectedContact(id)
    }

    onEditClick = (id) => {
        this.props.setSelectedContact(id)
        this.props.setEditMode()
    }


    renderItem = (contact) => {
        const { firstName, lastName, email, phone } = contact;
        return (
            <div key={contact.id} onClick={() => { this.onClick(contact.id) }}>
                <p>{firstName ? firstName : '' +
                    lastName ? lastName : ''}</p>
                <p>{email.length ? email[0].Email : ''}</p>
                <p>{phone.length ? phone[0].Phone : ''}</p>
                <button onClick={() => { this.onEditClick(contact.id) }} >Edit</button>
                <hr></hr>
            </div>
        )
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.contacts.map((contact) => {
                        return this.renderItem(contact)
                    })}
                </div>
                {this.props.isShow && <ContactShow />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { id } = state.selectedContact
    return {
        contacts: Object.values(state.contact),
        isShow: !!id
    }
}

export default connect(mapStateToProps, { setSelectedContact, setEditMode })(ContactList)