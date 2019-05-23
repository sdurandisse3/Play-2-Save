import React from 'react';
import Fuse from 'fuse.js';
import Camera from './components/camera'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Tags from './components/tags';
import Login from './containers/login';
import SignUp from './containers/signup';
import Category from './containers/categories';

//import Snappers from './containers/snappers';
// import SignUp from './containers/signup';
// import Feed from './containers/feed';
// import Header from './components/header';
// import Upload from './components/upload';
// import Login from './containers/login';
// import Camera from './components/camera';
// import Tags from './components/tags';
// import {HashRouter, Route, Switch } from 'react-router-dom';
// import Home from './containers/home';
// import Snappers from './containers/snappers';

// function App() {
//   return (
//     <div className="App">
// <HashRouter>
//   <>
//   <Route path='/' component={ Header } />
//   <Route path='/signup' exact component={SignUp}/>
//   <Route path='/upload' exact component={Upload}/>
//   <Route path='/login' exact component={Login}/>
//   <Route path='/feed' exact component={Feed}/>
//   <Route path='/camera' exact component={Camera}/>
//   <Route path='/tags' exact component={Tags}/>
//   </>
// </HashRouter>

class App extends React.Component {

// constructor(props){
// super(props)


  render(){
    return(
      <HashRouter>
      <Route path='/' component={Navbar}/>
      <Route path='/'exact component={Home}/>
      <Route path='/tags' exact component={Tags}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={SignUp}/>
      <Route path='/categories' exact component={Category}/>
      <Switch>
        <Route path='/upload' exact component={Camera} />
      </Switch>
    </HashRouter>
    );
  };

}
  

export default App;