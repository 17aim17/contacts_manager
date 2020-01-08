import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './Header'
import ContactList from './ContactList'
import { syncSetContact, syncEditContact, syncDeleteContact } from '../actions/contactActions'
import database from '../firebase'

class App extends Component {

  componentDidMount() {

    this.observer = database.collection(`users/ASHISH_ONE/contacts`)
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
  render() {
    return (
      <div>
        <Header />
        <ContactList />
      </div >
    );
  }
}

export default connect(null, { syncSetContact, syncEditContact, syncDeleteContact })(App)