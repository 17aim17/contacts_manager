import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContactDeatail extends Component {
    render() {
        return (
            <div>
                {this.props.contact.firstName}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact[state.selectedContact.id]
    }
}
export default connect(mapStateToProps, null)(ContactDeatail)