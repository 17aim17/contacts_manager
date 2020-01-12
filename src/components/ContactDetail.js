import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'
import Button from '@atlaskit/button'
import { deleteContact, setEditMode } from '../actions/contactActions'

class ContactDetail extends Component {

    renderPhone = (item) => {
        return (
            <div className="py-1">
                <a rel="noopener noreferrer"
                    target="_blank"
                    href={"tel:" + item.Phone}
                    className="mr-3"
                >
                    {item.Phone}
                </a>
                {item.Label && <span className="text-secondary">   {item.Label}  </span>}
            </div>


        )
    }

    renderEmail = (item) => {
        return (<div className="py-1">
            <a rel="noopener noreferrer"
                target="_blank"
                href={"mailto:" + item.Email}
                className="mr-3"
            >
                {item.Email}
            </a>
            {item.Label && <span className="text-secondary">   {item.Label}  </span>}
        </div>)
    }

    renderAddress = (item) => {
        return (<div className="py-1">
            <a rel="noopener noreferrer"
                target="_blank"
                href={"https://maps.google.com/maps?q=" + item.Address}
                className="mr-3"
            >
                {item.Address}
            </a>
            {item.Label && <span className="text-secondary">   {item.Label}  </span>}
        </div>)
    }

    renderEvent = (item) => {
        return (<div className="py-1">
            <span className="mr-3">{item.Event}</span>
            {item.Label && <span className="text-secondary">   {item.Label}  </span>}
        </div>)
    }

    renderWebsite = (item) => {
        return (<div className="py-1">
            <a rel="noopener noreferrer"
                target="_blank"
                href={item.Website}
                className="mr-3"
            >
                {item.Website}
            </a>
            {item.Label && <span className="text-secondary">   {item.Label}  </span>}
        </div>)
    }

    render() {
        const hrStyles = {
            background: '#DFE1E6',
            border: '1px solid #DFE1E6'
        }
        const {
            id,
            firstName,
            middleName,
            lastName,
            company,
            department,
            jobTitle,
            phone,
            email,
            address,
            events,
            website,
            notes } = this.props.contact;

        return (
            <Container>
                {/* Name */}
                <Row>
                    <Col sm={7} xs={7}>
                        <h6>{firstName && firstName} {middleName && middleName} {lastName && lastName}</h6>
                    </Col>
                    <Col sm={5} xs={5}>
                        <Button appearance='link' onClick={this.props.setEditMode}>Edit</Button>
                        <Button appearance='link' onClick={() => this.props.deleteContact(id)}>delete</Button>
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                {/* JobTitle Department Company */}
                {(jobTitle || department || company) && (
                    <React.Fragment>
                        <Row className="mt-2">
                            <Col sm={3} xs={3}>
                                <p>Company</p>
                            </Col>
                            <Col sm={9} xs={9}>
                                {jobTitle && jobTitle} {department && department} {company && company}
                            </Col>
                        </Row>
                        <hr style={hrStyles}></hr>
                    </React.Fragment>)
                }
                {/* Phones */}
                <Row className="mt-2">
                    <Col sm={3} xs={3}>
                        Phone
                    </Col>
                    <Col sm={9} xs={9}>
                        <Row>
                            {
                                phone.map((phone, index) => {
                                    return (
                                        <Col sm={12} xs={12} key={phone.Phone + phone.Label + index}>
                                            {this.renderPhone(phone)}
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                {/* Emails */}
                <Row className="mt-2">
                    <Col sm={3} xs={3}>
                        Email
                    </Col>
                    <Col sm={9} xs={9}>
                        <Row>
                            {
                                email.map((email, index) => {
                                    return <Col sm={12} xs={12} key={email.Email + email.Label + index}>
                                        {this.renderEmail(email)}
                                    </Col>
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                {/* Addresses */}
                {address && (
                    <React.Fragment>
                        <Row className="mt-2">
                            <Col sm={3} xs={3}>Address</Col>
                            <Col sm={9} xs={9}>
                                {
                                    address.map((address, index) => {
                                        return <Col sm={12} xs={12} key={address.Address + address.Label + index}>
                                            {this.renderAddress(address)}
                                        </Col>
                                    })
                                }
                            </Col>
                        </Row> <hr style={hrStyles}></hr></React.Fragment>)}
                {/* Events */}
                {events && <React.Fragment> <Row className="mt-2">
                    <Col sm={3} xs={3}>Events</Col>
                    <Col sm={9} xs={9}>
                        {
                            events.map((event, index) => {
                                return <Col sm={12} xs={12} key={event.Event + event.Label + index}>
                                    {this.renderEvent(event)}
                                </Col>
                            })
                        }
                    </Col>
                </Row> <hr style={hrStyles}></hr> </React.Fragment>}

                {
                    website &&
                    <React.Fragment>
                        <Row className="mt-2" >
                            <Col sm={3} xs={3}>Website</Col>
                            <Col sm={9} xs={9}>
                                {
                                    website.map((website, index) => {
                                        return <Col sm={12} xs={12} key={website.Website + website.Label + index}>
                                            {this.renderWebsite(website)}
                                        </Col>
                                    })
                                }
                            </Col>
                        </Row>
                        <hr style={hrStyles}></hr> </React.Fragment>
                }
                {
                    notes && <React.Fragment><Row className="mt-2">
                        <Col sm={3} xs={3}>Notes</Col>
                        <Col sm={9} xs={9}>
                            {notes && <p> {notes} </p>}
                        </Col>
                    </Row><hr style={hrStyles}></hr> </React.Fragment>
                }
            </Container >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact[state.selectedContact.id]
    }
}
export default connect(mapStateToProps, { setEditMode, deleteContact })(ContactDetail)