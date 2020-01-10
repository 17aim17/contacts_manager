import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCreateMode } from '../actions/contactActions'
import { startLogout } from '../actions/authActions'
import ContactCreate from './ContactCreate'

class Header extends Component {

    onClick = () => {
        this.props.setCreateMode()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.onClick}>Create Contact</button>
                    <button onClick={this.props.startLogout}>LogOut</button>
                </div>
                {this.props.create && <ContactCreate />}

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { create } = state.selectedContact
    return {
        create: create
    }
}

export default connect(mapStateToProps, {
    setCreateMode, startLogout
})(Header)