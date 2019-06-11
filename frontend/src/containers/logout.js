import React from 'react';
import firebase from '../firebase';
import '../assets/BgVid1.mp4'

class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    
    return <>
    <h1>Logged Out...</h1>
    <video id="background-video" loop autoPlay>
    <source src={require('../assets/BgVid2.mp4')} sytle = {StyleSheet} type="video/mp4" />
    <source src={require('../assets/BgVid2.mp4')} type="video/ogg" />
    Your browser does not support the video tag.
</video>
</>
  }
}
export default Logout;