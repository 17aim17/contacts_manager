import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

import Textfield from '@atlaskit/textfield';
import TextArea from '@atlaskit/textarea';
// import Select, { CreatableSelect, CountrySelect } from '@atlaskit/select'
import Button from '@atlaskit/button'

import { Row, Col } from 'react-bootstrap'



class ContactForm extends Component {


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div style={{ margin: '5px 0' }}>
                <Textfield  {...input} autoComplete='off' placeholder={label} isCompact />
            </div>
        )
    }

    renderArrayInput = ({ input, fields, meta, label }) => {

        return (<React.Fragment>

            {
                fields.map((rule, index) => {
                    return (
                        <Row key={index}>
                            <Col sm={12} xs={12}>
                                <Field  {...input} name={`${rule}.${label}`} component={this.renderInput} label={label} />
                            </Col>
                            <Col sm={6} xs={6} >
                                <Field  {...input} name={`${rule}.Label`} component={this.renderInput} label={`${label} Label`} />
                            </Col>
                            <Col sm={6} xs={6} style={{ margin: '5px 0' }}>
                                <Button title="Remove" appearance="link" onClick={() => fields.remove(index)}>Remove</Button>
                            </Col>
                        </Row>
                    )
                })
            }
            <Button title="Add" appearance={"link"} onClick={() => fields.push()}> Add {label}</Button>
        </React.Fragment>)
    }


    renderTextArea = ({ input, label, meta }) => {
        return (
            <TextArea {...input} autoComplete='off' placeholder={label} >
            </TextArea>
        )
    }

    render() {
        const hrStyles = {
            background: '#DFE1E6',
            border: '1px solid #DFE1E6'
        }
        return (
            <div>

                <Row >
                    <Col sm={2} xs={2}>
                        <p>Name</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <Field name="firstName" component={this.renderInput} label='First Name' />
                        <Field name="middleName" component={this.renderInput} label='Middle Name' />
                        <Field name="lastName" component={this.renderInput} label='Last Name' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Company</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <Field name="company" component={this.renderInput} label='Company' />
                        <Field name="department" component={this.renderInput} label='Department' />
                        <Field name="jobTitle" component={this.renderInput} label='Job Title' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Phone</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <FieldArray name="phone" component={this.renderArrayInput} label='Phone' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Email</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <FieldArray name="email" component={this.renderArrayInput} label='Email' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Address</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <FieldArray name="address" component={this.renderArrayInput} label='Address' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Events</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <FieldArray name='events' component={this.renderArrayInput} label='Event' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Websites</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <FieldArray name="website" component={this.renderArrayInput} label='Website' />
                    </Col>
                </Row>
                <hr style={hrStyles}></hr>
                <Row>
                    <Col sm={2} xs={2}>
                        <p>Notes</p>
                    </Col>
                    <Col sm={10} xs={10}>
                        <Field name='notes' component={this.renderTextArea} label='Notes' />
                    </Col>
                </Row>

                <Row>
                    <Col sm={8} style={{ marginTop: '10px' }}>
                        <Button appearance="primary" onClick={this.props.handleSubmit(this.onSubmit)}>Save</Button>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default reduxForm({
    form: 'ContactForm',
    initialValues: {
        email: [undefined],
        phone: [undefined]
    }
})(ContactForm)