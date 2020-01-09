import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContact, setEditMode } from '../actions/contactActions'

class ContactDetail extends Component {

    render() {
        const { contact } = this.props;

        return (
            <div>
                {contact ? contact.firstName : ''}
                <button onClick={this.props.setEditMode}>Edit</button>
                <button onClick={() => this.props.deleteContact(contact.id)}>delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact[state.selectedContact.id]
    }
}
export default connect(mapStateToProps, { setEditMode, deleteContact })(ContactDetail)