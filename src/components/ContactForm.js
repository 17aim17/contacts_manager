import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

class ContactForm extends Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <input {...input} autoComplete='off' placeholder={label} />
            </div>
        )
    }

    renderArrayInput = ({ input, fields, meta, label }) => {

        return (<div>
            <button onClick={() => fields.push()}>Add {label}</button>
            {fields.map((rule, index) => {
                return (
                    <div key={index}>
                        <Field name={`${rule}.${label}`} component={this.renderInput} label={label} />
                        <Field name={`${rule}.Label`} component={this.renderInput} label={`${label}Label`} />
                        <button title="Remove" onClick={() => fields.remove(index)}>Remove</button>
                    </div>
                )
            })}
        </div>)
    }

    renderTextArea = ({ input, label, meta }) => {
        return (
            <div>
                <textarea {...input} autoComplete='off' placeholder={label} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <Field name="firstName" component={this.renderInput} label='First Name' />
                <Field name="middleName" component={this.renderInput} label='Middle Name' />
                <Field name="lastName" component={this.renderInput} label='Last Name' />
                <Field name="company" component={this.renderInput} label='Company' />
                <Field name="jobTitle" component={this.renderInput} label='Job Title' />
                <Field name="department" component={this.renderInput} label='Department' />
                <FieldArray name="email" component={this.renderArrayInput} label='Email' />
                <FieldArray name="phone" component={this.renderArrayInput} label='Phone' />
                <FieldArray name="address" component={this.renderArrayInput} label='Address' />
                <Field name='birthday' component={this.renderInput} label='Birth Day' />
                <FieldArray name="website" component={this.renderArrayInput} label='Website' />
                <Field name='notes' component={this.renderTextArea} label='Notes' />
                <button onClick={this.props.handleSubmit(this.onSubmit)}>Save</button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'ContactForm',
    initialValues: {
        email: [{}],
        phone: [{}]
    }
})(ContactForm)