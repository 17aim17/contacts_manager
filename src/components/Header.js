import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCreateMode, clearCreateMode } from '../actions/contactActions'
import Modal from './Modal'
import ContactCreate from './ContactCreate'

class Header extends Component {

    onClick = () => {
        this.props.setCreateMode()
    }

    onDismiss = () => {
        this.props.clearCreateMode()
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Create Contact</button>
                <Modal
                    isModalVisible={this.props.isModalVisible}
                    onDismiss={this.onDismiss}
                >
                    <ContactCreate />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { id, create } = state.selectedContact
    return {
        isModalVisible: create || id
    }
}

export default connect(mapStateToProps, {
    setCreateMode, clearCreateMode
})(Header)