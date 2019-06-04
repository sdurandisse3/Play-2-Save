import React from 'react';
import SignUp from './containers/signup';
import Feed from './containers/feed';
import Header from './components/header';
import Upload from './components/upload';
import Login from './containers/login';
import Logout from './containers/logout';
import Home from './components/home';
import Camera from './components/camera';
import Tags from './components/tags';
import {HashRouter, Route, Switch } from 'react-router-dom';
// import Snappers from './containers/snappers';
import AuthContext from './contexts/auth';
import firebase from './firebase'

class App extends React.Component{
 constructor(props){
   super(props)
   this.state ={
     user:''
   }

 }

 componentDidMount() {
  this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      // ..... DO YOUR LOGGED IN LOGIC
      this.setState({ user: user.uid, uid: user.uid }, () => {
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

  render(){
  return (
    <div className="App">
<HashRouter>
  <AuthContext.Provider value={this.state.user}>
 <>
  <Route path='/' component={ Header } />
  <div className='container mt-5'>
  <Switch>
  <Route path='/' exact component={ Home } />
  <Route path='/signup' exact component={SignUp}/>
  <Route path='/upload' exact component={Upload}/>
  <Route path='/login' exact component={Login}/>
  <Route path='/feed' exact component={Feed}/>
  <Route path='/camera' exact component={Camera}/>
  <Route path='/tags' exact component={Tags}/>
  <Route path='/logout' exact component={ Logout } />    
  </Switch>
  </div>

  </>
  </AuthContext.Provider>
 
</HashRouter>
    </div>
  );    
  }
}
  

export default App;