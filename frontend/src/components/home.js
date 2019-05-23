import React from 'react';
import firebase from '../firebase';
import axios from 'axios';

export default class Home extends React.Component {

  state = {
    userEmail: '',
    userId: '',
    token: ''
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.setState({ userEmail: user.email, userId: user.uid }, () => {
          this.getFirebaseIdToken()
        });
      }
    
    })
  }



  render() {

  }
}

