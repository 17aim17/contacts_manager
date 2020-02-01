import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Table, Button } from 'react-bootstrap'
import ContactShow from './ContactShow'
import { setSelectedContact, setEditMode } from '../actions/contactActions'


class ContactList extends Component {
    state = {
        contacts: null
    }
    onClick = (id) => {
        this.props.setSelectedContact(id)
    }

    onEditClick = (id) => {
        this.props.setSelectedContact(id)
        this.props.setEditMode()
    }

    renderLink = (link, type) => {
        return (
            <a rel="noopener noreferrer"
                target="_blank"
                href={type + ":" + link}
                onClick={(e) => e.stopPropagation()
                }
                className="text-dark"
            >
                {link}
            </a >
        )
    }

    renderItem = (contact) => {
        const trStyles = {
            cursor: 'pointer',
            borderBottom: '2px solid #DFE1E6'
        }

        const { firstName, lastName, email, phone } = contact;

        return (
            <tr style={trStyles} key={contact.id} onClick={() => { this.onClick(contact.id) }}>
                <td><p>{firstName ? firstName : ''}{" "}
                    {lastName ? lastName : ''}
                </p></td>
                <td>{(phone && phone[0]) ? this.renderLink(phone[0].Phone, 'tel') : ''}</td>
                <td>{
                    (email && email[0]) ? this.renderLink(email[0].Email, 'mailto') : ''
                }
                </td>
                <td>
                    <Button variant="link" onClick={() => { this.onEditClick(contact.id) }} >
                        Edit
                    </Button>
                </td>
            </tr >
        )
    }
    render() {
        if (this.props.contacts.length === 0) {
            return (
                <Container className="text-center mt-5">
                    <p className="lead">You Currently Have No Contacts</p>
                </Container>
            )
        }
        return (
            <React.Fragment>
                <Container>
                    <Table hover responsive borderless>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.contacts.map((contact) => {
                                return this.renderItem(contact)
                            })}
                        </tbody>
                    </Table>
                </Container>
                {this.props.isShow && <ContactShow />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { id } = state.selectedContact
    return {
        contacts: Object.values(state.contact),
        isShow: !!id
    }
}

export default connect(mapStateToProps, { setSelectedContact, setEditMode })(ContactList)