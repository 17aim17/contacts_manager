import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contactActions'
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'

class ConatactCreate extends Component {
    onSubmit = (formValues) => {
        this.props.addContact(formValues)
    }

    render() {
        return (
            this.props.createMode ?
                <ContactForm onSubmit={this.onSubmit} /> :
                <ContactDetail />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        createMode: state.selectedContact.create
    }
}

export default connect(mapStateToProps, { addContact })(ConatactCreate)