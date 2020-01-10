import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './Header'
import ContactList from './ContactList'
import LoginPage from './LoginPage'
import Spinner from './Spinner'
import { syncSetContact, syncEditContact, syncDeleteContact, unsetContacts } from '../actions/contactActions'
import { login, logout } from '../actions/authActions'
import database, { firebase } from '../firebase'

class App extends Component {

  componentDidMount() {
    this.authObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.uid)

      } else {
        this.props.logout()
        this.props.unsetContacts()
      }
    });

  }

  componentDidUpdate() {
    if (this.props.isAuth) {
      this.observer = database.collection(`users/${this.props.uid}/contacts`)
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              this.props.syncSetContact({
                id: change.doc.id,
                ...change.doc.data()
              })
              // console.log(change.doc.id, change.doc.data());
            }
            if (change.type === 'modified') {
              this.props.syncEditContact(change.doc.id, {
                ...change.doc.data()
              })
              // console.log(change.doc.id, change.doc.data());
            }
            if (change.type === 'removed') {
              this.props.syncDeleteContact(change.doc.id);
              // console.log(change.doc.id, change.doc.data());
            }
          });
        });
    }
  }

  render() {

    switch (this.props.isAuth) {
      case true:
        return (
          <div>
            <Header />
            <ContactList />
          </div >
        )
      case false:
        return <LoginPage />
      default:
        return <Spinner />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    uid: state.auth.uid
  }
}

export default connect(mapStateToProps, { syncSetContact, syncEditContact, syncDeleteContact, login, logout, unsetContacts })(App)