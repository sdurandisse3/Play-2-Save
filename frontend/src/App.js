import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Camera from './Components/Camera';

function App() {
  return (
    <HashRouter>
      <Route path='/' component={Navbar} />
      <Switch>
        <Route path='/upload' exact component={Camera} />
      </Switch>
    </HashRouter>
  );
}

export default App;
