import React from 'react';
import Camera from './components/camera'
import {HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Tags from './components/tags';
import SignUp from './containers/signup'
import Category from './containers/categories'
//import Snappers from './containers/snappers';


class App extends React.Component {
  // constructor (props){
  //   super(props);
  // }

  render(){
    return(
      <HashRouter>
      <Route path='/' component={Navbar} />
      <Route path='/'exact component={Home} />
      <Route path='/tags' exact component={Tags} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='/categories' exact component={Category} />
      <Switch>
        <Route path='/upload' exact component={Camera} />
      </Switch>
    </HashRouter>
    );
  };
}
  

export default App;