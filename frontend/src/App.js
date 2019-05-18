import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './containers/home';
import Snappers from './containers/snappers';


class App extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return(
      <HashRouter>
        <Route path='/*' component= {Navbar} />
        <Switch>

        <Route path='/' exact component= {Home}/>
        <Route path='/snappers' exact component={Snappers} />
        </Switch>
      </HashRouter>
    );
  };
}
  

export default App;