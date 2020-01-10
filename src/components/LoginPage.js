import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogIn } from '../actions/authActions'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.startLogIn}>Sign In With Google</button>
            </div>
        )
    }
}

export default connect(null, { startLogIn })(LoginPage)