import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Container } from 'react-bootstrap'
import Button from '@atlaskit/button'
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
                <Navbar style={{ background: "#130f40" }} className="py-2 mb-5">
                    <Container>
                        <Button appearance='primary' onClick={this.onClick}>Create Contact</Button>
                        <Button appearance='danger' onClick={this.props.startLogout}>Log Out</Button>
                    </Container>
                </Navbar>
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