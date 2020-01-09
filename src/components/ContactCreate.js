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
        if (this.props.id) {
            return <ContactDetail />
        }
        return <ContactForm onSubmit={this.onSubmit} />
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.selectedContact.id
    }
}

export default connect(mapStateToProps, { addContact })(ConatactCreate)