import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'
import { editContact } from '../actions/contactActions'

// individual contact
class ContactShow extends Component {

    onEdit = (formValues) => {
        this.props.editContact(this.props.id, formValues);
    }

    render() {
        if (this.props.editMode) {
            return <ContactForm initialValues={this.props.contact} onSubmit={this.onEdit} />
        }
        return <ContactDetail />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.selectedContact.id,
        contact: state.contact[state.selectedContact.id],
        editMode: state.selectedContact.edit
    }
}
export default connect(mapStateToProps, { editContact })(ContactShow)