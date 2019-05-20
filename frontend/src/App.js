import React from 'react';
import SignUp from './containers/signup';
import Feed from './containers/feed';
import Header from './components/header';
import Upload from './components/upload';
import { HashRouter, Route} from 'react-router-dom';
import Login from './containers/login';
import Camera from './components/camera';
import Tags from './components/tags';



function App() {
  return (
    <div className="App">
<HashRouter>
  <>
  <Route path='/' component={ Header } />
  <Route path='/signup' exact component={SignUp}/>
  <Route path='/upload' exact component={Upload}/>
  <Route path='/login' exact component={Login}/>
  <Route path='/feed' exact component={Feed}/>
  <Route path='/camera' exact component={Camera}/>
  <Route path='/tags' exact component={Tags}/>
  </>
</HashRouter>

    
    </div>
  );
}

export default App;
