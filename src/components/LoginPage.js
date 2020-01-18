import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleButton from 'react-google-button'
import { startLogIn } from '../actions/authActions'

class LoginPage extends Component {
    render() {
        const containerStyles = {
            height: "100vh",
            width: "100vw",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            background: "#130f40"
        }
        const divStyles = {
            background: "#f5f6fa",
            borderRadius: "5px",
            width: "350px",
            maxWidth: "100%",
            padding: "40px 20px 25px 20px",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }


        return (
            <div style={containerStyles} >
                <div style={divStyles}>
                    <h2 className="mb-4" style={{ textAlign: "center" }}>Contacts Manager</h2>
                    <GoogleButton
                        onClick={this.props.startLogIn} />
                    <p className="mt-4 mb-0 lead" style={{ color: "#57606f" }}>Developed by Ashish </p>

                    <a style={{ color: "#3742fa" }} target="_blank" rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ashish17kumar/"
                    >
                        LinkedIn
                        </a>

                </div>
            </div>
        )
    }
}

export default connect(null, { startLogIn })(LoginPage)