import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCreateMode, clearCreateMode } from '../actions/contactActions'
import { setModal, clearModal } from '../actions/modalActions'
import Modal from './Modal'
import ContactCreate from './ContactCreate'

class Header extends Component {
    onClick = () => {
        this.props.setModal()
        this.props.setCreateMode()
    }
    onDismiss = () => {
        this.props.clearModal()
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
    return {
        isModalVisible: state.isModalVisible
    }
}

export default connect(mapStateToProps, {
    setCreateMode, clearCreateMode, setModal, clearModal
})(Header)