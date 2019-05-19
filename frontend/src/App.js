import React from 'react';
import SignUp from './containers/signup';
import Header from './components/header';
import { HashRouter, Route} from 'react-router-dom';
import Feed from './components/feed';



function App() {
  return (
    <div className="App">
<HashRouter>
  <>
  <Header/>
  <Route path='/signup' exact component={SignUp}/>
  <Route path='/upload' exact component={Image}/>
  <Route path='/feed' exact component={Feed}/>

  </>
</HashRouter>

    
    </div>
  );
}

export default App;
