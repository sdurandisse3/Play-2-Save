import React, {Component, StyleSheet} from 'react';
import firebase from '../firebase';
import axios from 'axios';
// import {StyleSheet} from 'react-native';
// import Video from 'react-native-video';

export default class Home extends React.Component {

  state = {
    videoURL1: '/Users/devwork/Desktop/SnapShoppers/SnapShoppers/frontend/src/assets/BgVid1.mp4',
    videoURL2: '/Users/devwork/Desktop/SnapShoppers/SnapShoppers/frontend/src/assets/BgVid2.mp4',
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
      else {
        // ..... The user is logged out
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  getFirebaseIdToken = () => {
    firebase.auth().currentUser.getIdToken(false).then((token) => {
      this.setState({ token })
    }).catch((error) => {
      // Handle error
    });
  }

  handleProtectedAPI = (e) => {
    axios.post('http://localhost:3001/protected', { token: this.state.token })
    .then(response => response.data )
    .then(data => {
      console.log(data);
    })
  }

  render() {

    const { userEmail, userId } = this.state;

   if (userEmail === '') {
        return <><h1>Welcome To Snap Shoppers Login or Signup to Connect with Couponers</h1>
        <video id="background-video" loop autoPlay>
        <source src={require('../assets/BgVid1.mp4')} sytle = {StyleSheet} type="video/mp4" /> src={require("../assets/SnapShoppersLogo.png")}
        <source src={require('../assets/BgVid1.mp4')} type="video/ogg" />
        Your browser does not support the video tag.
    </video>
    </>
    }
    else {
      return (
        <>
         {/* <video id="background-video" loop autoPlay>
    <source src={require('../assets/BgVid1.mp4')} sytle = {StyleSheet} type="video/mp4" /> src={require("../assets/SnapShoppersLogo.png")}
    <source src={require('../assets/BgVid1.mp4')} type="video/ogg" />
    Your browser does not support the video tag.
</video> */}
          <h2>Welcome back, {userEmail}</h2>
          <h4>Your ID is: {userId}</h4>
          <video id="background-video" loop autoPlay>
    <source src={require('../assets/BgVid2.mp4')} sytle = {StyleSheet} type="video/mp4" />
    <source src={require('../assets/BgVid2.mp4')} type="video/ogg" />
    Your browser does not support the video tag.
</video>
          {/* <button onClick={this.handleProtectedAPI}>Protected API</button>  */}
        </>
      )
    }
  }
}

