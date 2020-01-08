import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'
import { editContact } from '../actions/contactActions'

// individual contact
class ContactShow extends Component {

    onSubmit = (formValues) => {
        this.props.editContact(this.props.contact.id, formValues);
    }

    render() {
        const { contact } = this.props
        const initialValues = _.omit(contact, 'id')

        return (
            this.props.editMode ?
                <ContactForm initialValues={initialValues} onSubmit={this.onSubmit} /> :
                <ContactDetail />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editMode: state.selectedContact.edit
    }
}
export default connect(mapStateToProps, { editContact })(ContactShow)